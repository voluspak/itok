import { useAutoPlay } from '@/hooks/useAutoPlay'

interface VideoProps {
  src: string
}
const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useAutoPlay()

  return (
    <div className="mb-14 snap-start h-video flex justify-center items-center">
      <video autoPlay loop controls={false} className="h-video" ref={videoRef}>
        Not supported
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
