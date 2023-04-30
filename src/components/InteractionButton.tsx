import { useState, type ReactNode } from 'react'

interface InteractionButtonProps {
  initialValue?: number
  children: ReactNode
}

const InteractionButton: React.FC<InteractionButtonProps> = ({ children, initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue)
  const [isCounted, setIsCounted] = useState<boolean>(false)

  function toggleCount (): void {
    if (isCounted) {
      setCount(count - 1)
      setIsCounted(false)
      return
    }

    setCount(count + 1)
    setIsCounted(true)
  }

  return (
    <>
    <button
      onClick={toggleCount}
    >
      {children}
      <span>{count}</span>
    </button>
  </>
  )
}

export default InteractionButton
