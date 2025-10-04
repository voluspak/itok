import BottomNav from '@/components/BottomNav'
import { MagnifyingGlass } from '@/components/Icons'
import VideoListContainer from '@/components/VideoListContainer'
import MobileWarningModal from '@/components/MobileWarningModal'
import Link from 'next/link'
import Head from 'next/head'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>iTok - TikTok Clone</title>
        <meta name="description" content="TikTok clone built with Next.js" />
      </Head>

      <MobileWarningModal />

      <main className='overflow-hidden bg-black text-white w-full max-w-[430px] h-screen mx-auto relative text-xs'>
        <VideoListContainer />
        <nav className='relative mt-5'>
          <ul className='flex justify-center items-center gap-3 text-base font-medium'>
            <li><Link href={'/'} className='opacity-50'>Following</Link></li>
            <li><Link href={'/'} className='underline'>For You</Link></li>
          </ul>
        <Link href={'/'} className='absolute -top-1 right-3 opacity-50'><MagnifyingGlass /></Link>
        </nav>

        <BottomNav />
      </main>
    </>
  )
}

export default Home
