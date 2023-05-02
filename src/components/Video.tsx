interface VideoProps {
  src: string
}
const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <video src={src} />
  )
}

export default Video
