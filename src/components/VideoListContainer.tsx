import Loading from './Loading'
import Video from './Video'
import useFeedVideos from '../hooks/useFeedVideos'

const VideoListContainer: React.FC = () => {
  const { videos, loading } = useFeedVideos()
  return (
    <section className='h-full absolute top-0 right-0 left-0 snap-mandatory snap-y overflow-y-auto flex flex-col'>
      {loading
        ? <Loading />
        : videos.map(video => {
          return (
            <div key={video.aweme_id}>
              <Video video={video} />
            </div>
          )
        })}
    </section>
  )
}

export default VideoListContainer
