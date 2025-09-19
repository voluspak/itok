// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CACHE_DURATION, VIDEO_POOL_SIZE } from '../../const'

require('dotenv').config({ path: './.env.local' })

let videoCache = []
let lastFetch = 0

export default async function handler (req, res) {
  const regions = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es']
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com'
    }
  }

  try {
    const now = Date.now()

    if (videoCache.length < 10 || (now - lastFetch) > CACHE_DURATION) {
      console.log('Renovando caché de videos...')

      const newVideos = []

      for (let i = 0; i < 3; i++) {
        const region = regions[i % regions.length]
        const url = `https://tiktok-scraper7.p.rapidapi.com/feed/list?region=${region}&count=15`

        try {
          const response = await fetch(url, options)
          if (response.ok) {
            const result = await response.json()

            if (result.code === 0 && result.data) {
              newVideos.push(...result.data)
            }
          }
        } catch (callError) {
          console.warn(`Error en llamada ${i + 1}:`, callError.message)
        }

        if (i < 2) await new Promise(resolve => setTimeout(resolve, 300))
      }

      const uniqueVideos = newVideos.filter((video, index, array) => array.findIndex(v => v.aweme_id === video.aweme_id) === index)

      videoCache = uniqueVideos.slice(0, VIDEO_POOL_SIZE)
      lastFetch = now

      console.log(`Cache renovado: ${videoCache.length} videos únicos`)
    }

    const videosToReturn = Math.min(8, Math.max(5, videoCache.length))
    const randomVideos = [...videoCache]
      .sort(() => Math.random() - 0.5)
      .slice(0, videosToReturn)

    console.log(`Enviando ${randomVideos.length} videos desde cache`)

    return res.status(200).json({
      success: true,
      count: randomVideos.length,
      cache_size: videoCache.length,
      cache_age: Math.round((now - lastFetch) / 1000),
      videos: randomVideos
    })
  } catch (error) {
    console.error('Error en el handler:', error.message)
    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'Error al obtener videos',
      details: error.message
    })
  }
}
