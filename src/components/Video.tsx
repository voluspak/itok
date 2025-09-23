import { useAutoPlay } from '@/hooks/useAutoPlay'
import Controls from './Controls'
import { type TikTokVideo } from '@/types'

interface VideoProps {
  video: TikTokVideo
}
const Video: React.FC<VideoProps> = ({ video }) => {
  const [videoRef, useTooglePlayPause, handlePlay, handlePause, isPlaying] = useAutoPlay()

  return (
    <div className="mb-14 snap-start h-video flex justify-center items-center relative">
      <video autoPlay loop controls={false} className="h-video" ref={videoRef}
        muted
        playsInline
        onClick={useTooglePlayPause}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        Not supported
        <source src={video.play} type="video/mp4" />
      </video>
      <Controls videoInfo={video}/>
      {
        !isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="rounded-full p-4">
              <svg
                className='w-24 h-24 text-white opacity-50'
                fill='white'
                viewBox='0 0 20 20'
              >
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
                />
              </svg>
            </div>
            </div>
        )}
    </div>
  )
}

export default Video
