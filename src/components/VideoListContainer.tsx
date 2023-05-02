import list from '../mocks/aweme_list.json'
import Video from './Video'

const VideoListContainer = (): void => {
  list.map(item => {
    return (
      <Video src={item.video.download_addr.url_list[0]} key={item.aweme_id} />
    )
  })
}

export default VideoListContainer
