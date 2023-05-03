import { type AwemeList } from '@/types'
import { useEffect, useState } from 'react'

const url = 'https://tiktok-all-in-one.p.rapidapi.com/feed?region=US&device_id=7523368224928586621'
const apiKey = String(process.env.API_KEY)

const useFeedVideos = (): AwemeList[] => {
  const [videos, setVideos] = useState<AwemeList[]>([])

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
      }
    })
      .then(async response => await response.json())
      .then(data => {
        setVideos(data.aweme_list)
      })
      .catch(error => { console.log(error) })
  }, [])
  return videos
}

export default useFeedVideos
