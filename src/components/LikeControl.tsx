import { LikeIcon } from './Icons'
import { useInteraction } from '@/hooks/useInteraction'

const LikeControl: React.FC = () => {
  const { onInteraction, interaction, interactionCount } = useInteraction({ initialValue: 0 })
  return (
    <>
    <button
      onClick={onInteraction}
    >
      <LikeIcon
        className={`w-10 h-10 rounded-full active:animate-likeVideo ${interaction ? 'text-red-500 fill-red-500' : 'text-white fill-white'} overflow-hidden`}
      />
      <span>{interactionCount}</span>
    </button>
  </>
  )
}

export default LikeControl
