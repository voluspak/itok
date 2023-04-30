import { useState } from 'react'

interface UseInteractionReturns {
  interaction: boolean
  onInteraction: () => void
  interactionCount: number
}

export interface UseInteractionProps {
  initialValue?: number
}

export const useInteraction = ({ initialValue = 0 }: UseInteractionProps = {}): UseInteractionReturns => {
  const [interaction, setInteraction] = useState<boolean>(false)
  const [interactionCount, setInteractionCount] = useState<number>(initialValue)

  function onInteraction (): void {
    if (interaction) {
      setInteractionCount(interactionCount - 1)

      setInteraction(false)
      return
    }
    setInteraction(true)
    setInteractionCount(interactionCount + 1)
  }

  return { onInteraction, interaction, interactionCount }
}
