import { type TikTokVideo, type MyApiResponse } from '@/types'
import { useEffect, useState } from 'react'

const url = '/api/hello'

const useFeedVideos = (): TikTokVideo[] => {
  const [videos, setVideos] = useState<TikTokVideo[]>([])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchVideos = async () => {
      try {
        const response = await fetch(url)

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

        setVideos(data.videos)
        console.log('Videos cargados correctamente')
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido'
        console.error('Error al obtener los videos:', errorMessage)
        setVideos([])
      }
    }

    void fetchVideos()
  }, [])

  return videos
}

export default useFeedVideos
