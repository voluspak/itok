import list from '../mocks/aweme_list.json'
import Video from './Video'

const VideoListContainer: React.FC = () => {
  return (
    <section className='h-full absolute top-0 right-0 left-0 snap-mandatory snap-y overflow-y-auto flex flex-col'>
    {list.map(item => {
      return (
      <Video src={item.video.download_addr.url_list[0]} key={item.aweme_id} />
      )
    })}
    </section>
  )
}

export default VideoListContainer
