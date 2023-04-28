import { LikeIcon } from './Icons'
import { useLike } from '@/hooks/useLike'

const LikeControl: React.FC = () => {
  const { onLikeVideo, like, likeCount } = useLike()
  return (
    <>
    <button
      onClick={onLikeVideo}
    >
      <LikeIcon
        className={`w-10 h-10 rounded-full active:animate-likeVideo ${like ? 'text-red-500 fill-red-500' : 'text-white fill-white'} overflow-hidden`}
      />
      <span>{likeCount}</span>
    </button>
  </>
  )
}

export default LikeControl
