import { useRef, useEffect, useState } from 'react'

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

type UseAutoPlay = [
  React.RefObject<HTMLVideoElement>,
  () => void,
  () => void,
  () => void,
  boolean
]

const IOOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0
}

export const useAutoPlay = (): UseAutoPlay => {
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

  const [isPlaying, setIsPlaying] = useState(true)

  const useTooglePlayPause = (): void => {
    if (videoRef.current === null || videoRef.current === undefined) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      void videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePlay = (): void => { setIsPlaying(true) }
  const handlePause = (): void => { setIsPlaying(false) }

  return [videoRef, useTooglePlayPause, handlePlay, handlePause, isPlaying]
}
