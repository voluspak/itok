/* eslint-disable @typescript-eslint/naming-convention */
import { type VideoDetail } from '@/types'
import { DEFAULT_TTL_MS, API_ENDPOINT, API_ACTIONS } from '@/const'
import { useState, useEffect, useRef, useMemo } from 'react'

// Types
export interface VideoParams {
  videoUrl?: string
  aweme_id?: string
  author_unique_id?: string
}

export interface CacheEntry<T> {
  ts: number
  data: T
}

// Cache utilities
export const detailCache = new Map<string, CacheEntry<VideoDetail>>()

export function cachedGet<T> (map: Map<string, CacheEntry<T>>, key: string, ttl = DEFAULT_TTL_MS): T | null {
  const entry = map.get(key)
  if (entry == null) return null

  if (Date.now() - entry.ts > ttl) {
    map.delete(key)
    return null
  }

  return entry.data
}

export function cacheSet<T> (map: Map<string, CacheEntry<T>>, key: string, data: T): void {
  map.set(key, { ts: Date.now(), data })
}

// Query string builder
export function buildQueryStringFromParams (params: VideoParams): string {
  const { videoUrl, aweme_id, author_unique_id } = params

  if (videoUrl != null) {
    return `url=${encodeURIComponent(videoUrl)}`
  }

  if (aweme_id != null) {
    const parts = [`aweme_id=${encodeURIComponent(aweme_id)}`]
    if (author_unique_id != null) {
      parts.push(`author_unique_id=${encodeURIComponent(author_unique_id)}`)
    }
    return parts.join('&')
  }

  return ''
}

// Hook
export function useVideoDetail (params: VideoParams | null): {
  detail: VideoDetail | null
  loading: boolean
  error: string | null
} {
  const [detail, setDetail] = useState<VideoDetail | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef<boolean>(true)

  // Memoize query string to prevent unnecessary recalculations
  const queryString = useMemo(() => {
    if (params == null) return null
    const qs = buildQueryStringFromParams(params)
    return qs.length > 0 ? qs : null
  }, [params?.videoUrl, params?.aweme_id, params?.author_unique_id])

  // Memoize cache key
  const cacheKey = useMemo(() => {
    return queryString != null ? `detail:${queryString}` : null
  }, [queryString])

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    // Early return if no params
    if (params == null) {
      setDetail(null)
      setLoading(false)
      setError(null)
      return
    }

    // Validate query string
    if (queryString == null || cacheKey == null) {
      console.error('Faltan parámetros (videoUrl o aweme_id)')
      setError('Faltan parámetros (videoUrl o aweme_id)')
      setDetail(null)
      setLoading(false)
      return
    }

    // Check cache first
    const cached = cachedGet(detailCache, cacheKey)
    if (cached != null) {
      setDetail(cached)
      setLoading(false)
      setError(null)
      return
    }

    // Fetch from API
    const controller = new AbortController()
    let isCancelled = false

    const fetchDetail = async (): Promise<void> => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(
          `${API_ENDPOINT}?action=${API_ACTIONS.DETAIL}&${queryString}`,
          { signal: controller.signal }
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const json = await response.json()

        if (json.success !== true) {
          throw new Error(json.message ?? 'Error en la respuesta de la API')
        }

        const payload: VideoDetail = json.data ?? json

        if (isCancelled || !mountedRef.current) return

        cacheSet(detailCache, cacheKey, payload)
        setDetail(payload)
      } catch (err) {
        if (isCancelled || !mountedRef.current) return

        const error = err as Error
        if (error.name === 'AbortError') return

        console.error('Error fetching video detail:', error)
        setError(error.message)
        setDetail(null)
      } finally {
        if (!isCancelled && mountedRef.current) {
          setLoading(false)
        }
      }
    }

    void fetchDetail()

    return () => {
      isCancelled = true
      controller.abort()
    }
  }, [queryString, cacheKey, params])

  return { detail, loading, error }
}
