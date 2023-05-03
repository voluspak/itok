import { useRef, useEffect } from 'react'

export const useAutoPlay = (): React.LegacyRef<HTMLVideoElement> => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video === null || video === undefined) return

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      const videoElement = entry.target as HTMLVideoElement

      if (!entry.isIntersecting) {
        videoElement.pause()
        return
      }

      if (entry.isIntersecting) {
        videoElement.play().catch(error => {
          console.log('Hubo un error con el intersection observer')
          console.log(error)
        })
      }
    })

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return videoRef
}
