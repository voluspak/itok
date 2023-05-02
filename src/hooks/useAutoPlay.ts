import { useRef, useEffect } from 'react'

export const useAutoPlay = (): React.LegacyRef<HTMLVideoElement> => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video === null || video === undefined) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.target instanceof HTMLMediaElement) {
        if (!entry.isIntersecting) {
          entry.target.pause()
        }
        if (entry.isIntersecting) {
          video.play().catch(console.error)
        }
      }
    })

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return videoRef
}
