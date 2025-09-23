import { useInteraction, type UseInteractionProps } from '@/hooks/useInteraction'
import { ICONS_COLORS } from '@/const'

interface InteractionButtonProps {
  Icon: React.ElementType
  iconColor?: string
  fill?: boolean
  initialValue?: UseInteractionProps['initialValue']
}

const InteractionButtonPrototype: React.FC<InteractionButtonProps> = ({ Icon, iconColor = ICONS_COLORS.INACTIVE_DEFAULT, fill = false, initialValue = 0 }) => {
  const { onInteraction, interaction, interactionCount } = useInteraction({ initialValue })
  return (
    <>
      <button
        onClick={onInteraction}
      >
        <Icon
          className={`
            w-10 h-10 rounded-full active:animate-likeVideo
            ${interaction ? ICONS_COLORS[iconColor] : ICONS_COLORS.INACTIVE_DEFAULT}
            overflow-hidden
          `}
          fill={fill ? 'yellow' : 'white'}
        />
        <span>{interactionCount}</span>
      </button>
  </>
  )
}

export default InteractionButtonPrototype
