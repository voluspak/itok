import { type TikTokVideo, type MyApiResponse } from '@/types'
import { useEffect, useState, useRef } from 'react'

const url = '/api/hello?action=list'

const useFeedVideos = (): { videos: TikTokVideo[], loading: boolean, error: string | null } => {
  const [videos, setVideos] = useState<TikTokVideo[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    const controller = new AbortController()

    const fetchVideos = async (): Promise<void> => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: MyApiResponse = await response.json()

        console.log('Datos recibidos del endpoint:', data)

        if (!data.success) {
          throw new Error('Error en la respuesta de la API')
        }

        if (!Array.isArray(data.videos)) {
          throw new Error('Formato de datos inesperado')
        }

        if (!mountedRef.current) return

        setVideos(data.videos)
        console.log('Videos cargados correctamente')
      } catch (error) {
        if ((error as any).name === 'AbortError') return

        setError(error instanceof Error ? error.message : String(error))
        setVideos([])
      } finally {
        if (mountedRef.current) setLoading(false)
      }
    }

    void fetchVideos()

    return () => {
      mountedRef.current = false
      controller.abort()
    }
  }, [])

  return { videos, loading, error }
}

export default useFeedVideos
