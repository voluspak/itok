import { useRef, useEffect } from 'react'

type IOCallback = IntersectionObserverCallback

const callback: IOCallback = (entries) => {
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
}

const IOOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const useAutoPlay = (): React.LegacyRef<HTMLVideoElement> => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video === null || video === undefined) return

    const observer = new IntersectionObserver(callback, IOOptions)

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return videoRef
}
