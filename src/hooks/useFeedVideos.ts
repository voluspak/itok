import { type AwemeList } from '@/types'
import { useEffect, useState } from 'react'

const url = 'http://localhost:3000/api/hello'

const useFeedVideos = (): AwemeList[] => {
  const [videos, setVideos] = useState<AwemeList[]>([])

  useEffect(() => {
    fetch(url)
      .then(async response => await response.json())
      .then(data => {
        setVideos(data)
      })
      .catch(error => { console.log(error) })
  }, [])
  return videos
}

export default useFeedVideos
