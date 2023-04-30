import { useState } from 'react'

interface useLikeReturns {
  like: boolean
  onLikeVideo: () => void
  likeCount: number
}

export const useLike = (): useLikeReturns => {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  function onLikeVideo (): void {
    if (like) {
      setLikeCount(likeCount - 1)

      setLike(false)
      return
    }
    setLike(true)
    setLikeCount(likeCount + 1)
  }

  return { onLikeVideo, like, likeCount }
}
