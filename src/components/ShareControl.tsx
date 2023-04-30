import React from 'react'
import InteractionButton from './InteractionButton'
import { ShareIcon } from './Icons'

const ShareControl: React.FC = () => {
  return (
      <InteractionButton>
        <ShareIcon />
      </InteractionButton>
  )
}

export default ShareControl
