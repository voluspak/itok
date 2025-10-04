import { type TikTokVideo, type MyApiResponse } from '@/types'
import { API_ENDPOINT, API_ACTIONS } from '@/const'
import { useEffect, useState, useRef, useCallback } from 'react'

// Types
interface UseFeedVideosReturn {
  videos: TikTokVideo[]
  loading: boolean
  error: string | null
  refetch: () => void
}

// Constants
const FEED_URL = `${API_ENDPOINT}?action=${API_ACTIONS.LIST}` as const

// Hook
export const useFeedVideos = (): UseFeedVideosReturn => {
  const [videos, setVideos] = useState<TikTokVideo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef<boolean>(true)
  const abortControllerRef = useRef<AbortController | null>(null)

  const fetchVideos = useCallback(async (): Promise<void> => {
    // Cancel previous request if exists
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort()
    }

    abortControllerRef.current = new AbortController()

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(FEED_URL, {
        signal: abortControllerRef.current.signal
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: MyApiResponse = await response.json()

      if (!data.success) {
        throw new Error(data.message ?? 'Error en la respuesta de la API')
      }

      if (!Array.isArray(data.videos)) {
        throw new Error('Formato de datos inesperado: videos no es un array')
      }

      if (!mountedRef.current) return

      setVideos(data.videos)
    } catch (err) {
      if (!mountedRef.current) return

      const error = err as Error
      if (error.name === 'AbortError') return

      console.error('Error fetching feed videos:', error)
      setError(error.message)
      setVideos([])
    } finally {
      if (mountedRef.current) {
        setLoading(false)
      }
    }
  }, [])

  const refetch = useCallback(() => {
    void fetchVideos()
  }, [fetchVideos])

  useEffect(() => {
    mountedRef.current = true

    void fetchVideos()

    return () => {
      mountedRef.current = false
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort()
      }
    }
  }, [fetchVideos])

  return { videos, loading, error, refetch }
}

export default useFeedVideos
