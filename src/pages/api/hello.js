/* eslint-disable camelcase */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CACHE_DURATION, VIDEO_POOL_SIZE } from '../../const'

require('dotenv').config({ path: './.env.local' })

const HOST = 'tiktok-scraper7.p.rapidapi.com'
const BASE = `https://${HOST}`

/**
 * Caches
 * - videoCache: tu pool original (lista de videos /feed/list)
 * - detailCache: Map<videoUrl, { ts, data }>
 * - commentCache: Map<cacheKey, { ts, data }> donde cacheKey = `${videoUrl}|${cursor}|${count}`
 */

let videoCache = []
let lastFetch = 0

const detailCache = new Map()
const commentCache = new Map()

const DEFAULT_TTL = typeof CACHE_DURATION === 'number' ? CACHE_DURATION : 60 * 1000 // 1 minuto

function cacheGet (map, key, ttl = DEFAULT_TTL) {
  const entry = map.get(key)
  if (!entry) return null

  if (Date.now() - entry.ts > ttl) {
    map.delete(key)
    return null
  }

  return entry.data
}

function cacheSet (map, key, data) {
  map.set(key, { ts: Date.now(), data })
}

function buildVideoUrlFromparts ({ aweme_id, author_unique_id }) {
  if (!aweme_id) return null
  if (author_unique_id) {
    return `https://www.tiktok.com/@${author_unique_id}/video/${aweme_id}`
  }

  // Fallback en formato conocido
  return `https://www.tiktok.com/video/${aweme_id}`
}

async function fetchRapid (path) {
  const url = `${BASE}${path}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': HOST
    }
  }

  const response = await fetch(url, options)
  if (!response.ok) {
    const text = await response.text().catch(() => null)
    const err = new Error(`RapidAPI error ${response.status}: ${response.statusText} - ${text ?? 'No response text'}`)
    err.status = response.status
    throw err
  }

  return response.json()
}

async function fetchFeedAndRefreshCache (regions) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': HOST
    }
  }
  const newVideos = []

  for (let i = 0; i < 3; i++) {
    const region = regions[i % regions.length]
    const url = `${BASE}/feed/list?region=${region}&count=15`
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        console.warn(`Feed call ${i + 1} failed: ${response.status} ${response.statusText}`)
        continue
      }
      const result = await response.json()
      if (result && result.code === 0 && result.data) {
        newVideos.push(...result.data)
      }
    } catch (error) {
      console.warn(`Error in feed call ${i + 1}:`, error.message ?? error)
    }
    if (i < 2) await new Promise(resolve => setTimeout(resolve, 300))
  }
  const uniqueVideos = newVideos.filter((video, index, array) => array.findIndex(v => v.aweme_id === video.aweme_id) === index)

  videoCache = uniqueVideos.slice(0, VIDEO_POOL_SIZE)
  lastFetch = Date.now()
  return videoCache.length
}

// Handler principal

export default async function handler (req, res) {
  const regions = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es']

  try {
    const now = Date.now()
    const { action = 'list' } = req.query

    // ACTION: LIST (Llamada a la API con refresco de cache)

    if (action === 'list') {
      if (videoCache.length < 10 || (now - lastFetch) > DEFAULT_TTL) {
        console.log('Renovando caché de videos...')

        await fetchFeedAndRefreshCache(regions)
        console.log(`Caché renovada: ${videoCache.length} videos únicos`)
      }

      const videosToReturn = Math.min(8, Math.max(5, videoCache.length))
      const randomVideos = [...videoCache]
        .sort(() => Math.random() - 0.5)
        .slice(0, videosToReturn)

      return res.status(200).json({
        success: true,
        action: 'list',
        count: randomVideos.length,
        cache_size: videoCache.length,
        cache_age: Math.round((now - lastFetch) / 1000),
        videos: randomVideos
      })
    }

    // HELPER para detail/comments
    function resolveVideoUrlFromReq (query) {
      const { videoUrl, aweme_id, author_unique_id } = query
      if (videoUrl) return decodeURIComponent(videoUrl)

      const built = buildVideoUrlFromparts({ aweme_id, author_unique_id })
      return built
    }

    // ACTION: DETAIL
    if (action === 'detail') {
      const videoUrl = resolveVideoUrlFromReq(req.query)
      if (!videoUrl) {
        return res.status(400).json({ success: false, message: 'Parámetros insuficientes. Proporcione videoUrl o aweme_id (+ author_unique_id).' })
      }

      // cache key por videoUrl
      const cached = cacheGet(detailCache, videoUrl, DEFAULT_TTL)
      if (cached) {
        return res.status(200).json({ success: true, action: 'detail', source: 'cache', data: cached })
      }

      try {
        // endpoint /?url=<VIDEO_URL>
        const path = `/?url=${encodeURIComponent(videoUrl)}`
        const data = await fetchRapid(path)

        // la API puede devolver la estructura en data o directamente
        const payload = data?.data || data
        cacheSet(detailCache, videoUrl, payload)

        return res.status(200).json({ success: true, action: 'detail', source: 'api', data: payload })
      } catch (error) {
        console.error('Error fetching video detail:', error.message ?? error)
        return res.status(502).json({ success: false, message: 'Error fetching video detail', details: error.message ?? error })
      }
    }

    // ACTION: COMMENTS
    if (action === 'comments') {
      const videoUrl = resolveVideoUrlFromReq(req.query)
      if (!videoUrl) {
        return res.status(400).json({ success: false, message: 'Parámetros insuficientes. Proporcione videoUrl o aweme_id (+ author_unique_id).' })
      }

      const cursor = Number(req.query.cursor ?? 0)
      const count = Math.min(100, Math.max(1, Number(req.query.count ?? 20))) // sanity bounds
      const cacheKey = `${videoUrl}|${cursor}|${count}`

      const cached = cacheGet(commentCache, cacheKey, DEFAULT_TTL)
      if (cached) {
        return res.status(200).json({ success: true, action: 'comments', source: 'cache', data: cached })
      }

      try {
      // endpoint /comment/list?url=<url>&cursor=0&count=20
        const path = `/comment/list?url=${encodeURIComponent(videoUrl)}&cursor=${cursor}&count=${count}`
        const data = await fetchRapid(path)

        // extraer data
        const payload = data?.data || data
        cacheSet(commentCache, cacheKey, payload)

        return res.status(200).json({ success: true, action: 'comments', source: 'api', data: payload })
      } catch (err) {
        console.error('Error fetching comments:', err.message ?? err)
        return res.status(502).json({ success: false, message: 'Error fetching comments', details: err.message ?? err })
      }
    }

    // Accion no soportada
    return res.status(400).json({ success: false, message: 'Acción no soportada. Use action=list|detail|comments' })
  } catch (err) {
    console.error('Unexpected error in handler:', err.message ?? err)
    return res.status(500).json({ success: false, message: 'Error al procesar la petición', details: err.message ?? err })
  }
}
