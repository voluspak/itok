import Loading from './Loading'
import Video from './Video'
import useFeedVideos from '../hooks/useFeedVideos'

const VideoListContainer: React.FC = () => {
  const video = useFeedVideos()
  return (
    <section className='h-full absolute top-0 right-0 left-0 snap-mandatory snap-y overflow-y-auto flex flex-col'>
    {video.length === 0
      ? <Loading />
      : video.map(item => {
        return (
      <Video src={item.video.download_addr.url_list[0]} key={item.aweme_id} />
        )
      })}
    </section>
  )
}

export default VideoListContainer
