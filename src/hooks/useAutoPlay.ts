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
        videoElement.play().catch(console.error)
      }
    })

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return videoRef
}
