import BottomNav from '@/components/BottomNav'
import Controls from '@/components/Controls'
import { MagnifyingGlass } from '@/components/Icons'
import VideoListContainer from '@/components/VideoListContainer'
import Link from 'next/link'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <main className='overflow-hidden bg-black text-white w-full h-screen mx-auto relative text-xs'>
        <VideoListContainer />
        <nav className='relative mt-5'>
          <ul className='flex justify-center items-center gap-3 text-base font-medium'>
            <li><Link href={'/'} className='opacity-50'>Following</Link></li>
            <li><Link href={'/'} className='underline'>For You</Link></li>
          </ul>
        <Link href={'/'} className='absolute -top-1 right-3 opacity-50'><MagnifyingGlass /></Link>
        </nav>

        <Controls />
        <BottomNav />
      </main>
    </>
  )
}

export default Home
