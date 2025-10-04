import { ICONS_COLORS_REFERENCE } from '@/const'
import CommentsControl from './CommentsControl'
import InteractionButtonPrototype from './InteractionButtonPrototye'
import ProfileControl from './ProfileControl'
import { BookmarkIcon, LikeIcon, ShareIcon } from './Icons'
import { type TikTokVideo } from '@/types'
import { useVideoDetail } from '@/hooks/useVideoDetail'
import { useVideoComments } from '@/hooks/useVideoComments'

const profileLink: string = ''

const Controls: React.FC<{ videoInfo: TikTokVideo }> = ({ videoInfo }) => {
  const params = { videoUrl: videoInfo.play, aweme_id: videoInfo.aweme_id, author_unique_id: videoInfo.author.unique_id }

  const { detail, loading: detailLoading } = useVideoDetail(params)
  const { comments, loading: commentsLoading, loadMore, hasMore } = useVideoComments(params, { initialCount: 10 })

  return (
    <ul className='absolute right-3 bottom-10 mb-5 flex flex-col justify-end items-center gap-3'>
      <li><ProfileControl profileLink={profileLink} avatar={videoInfo.author.avatar} /></li>
      <li><InteractionButtonPrototype Icon={LikeIcon} iconColor={ICONS_COLORS_REFERENCE.likeIcon} initialValue={detail?.like_count} /></li>
      <li><CommentsControl commentsCounter={videoInfo.comment_count} /></li>
      <li><InteractionButtonPrototype Icon={BookmarkIcon} fill={true} iconColor={ICONS_COLORS_REFERENCE.bookmarkIcon} /></li>
      <li><InteractionButtonPrototype Icon={ShareIcon} initialValue={videoInfo.share_count} /></li>
      <li><ProfileControl profileLink={profileLink} avatar={videoInfo.author.avatar} /></li>
    </ul>
  )
}

export default Controls
