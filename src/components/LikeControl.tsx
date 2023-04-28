import React, { useState } from 'react'
import { LikeIcon } from './Icons'

const LikeControl: React.FC = () => {
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
  return (
    <>
    <button
      onClick={onLikeVideo}
    >
      <LikeIcon
        className={`w-12 h-12 rounded-full active:animate-likeVideo ${like ? 'text-red-500 fill-red-500' : 'text-white fill-white'} overflow-hidden`}
      />
      <span>{likeCount}</span>
    </button>
  </>
  )
}

export default LikeControl
