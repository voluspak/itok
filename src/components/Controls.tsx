import { ICONS_COLORS_REFERENCE } from '@/const'
import CommentsControl from './CommentsControl'
import InteractionButtonPrototype from './InteractionButtonPrototye'
import ProfileControl from './ProfileControl'
import ShareControl from './ShareControl'
import { BookmarkIcon, LikeIcon } from './Icons'

const profileLink: string = ''

const Controls: React.FC = () => {
  return (
    <ul className='absolute right-3 bottom-3 flex flex-col justify-end items-center gap-5'>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><InteractionButtonPrototype Icon={LikeIcon} iconColor={ICONS_COLORS_REFERENCE.likeIcon}/></li>
      <li><CommentsControl /></li>
      <li><InteractionButtonPrototype Icon={BookmarkIcon} fill={true} iconColor={ICONS_COLORS_REFERENCE.bookmarkIcon}/></li>
      <li><ShareControl /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
    </ul>
  )
}

export default Controls
