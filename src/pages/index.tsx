import BottomNav from '@/components/BottomNav'
import Controls from '@/components/Controls'
import { MagnifyingGlass } from '@/components/Icons'
import Link from 'next/link'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <main className='overflow-hidden bg-black text-white max-w-sm w-full h-screen mx-auto p-3 relative text-xs'>
        <nav className='relative'>
          <ul className='flex justify-center items-center gap-3'>
            <li><Link href={'/'}>Following</Link></li>
            <li><Link href={'/'} className='underline'>For You</Link></li>
          </ul>
        <Link href={'/'} className='absolute top-0 right-0'><MagnifyingGlass /></Link>
        </nav>

        <Controls />
        <BottomNav />
      </main>
    </>
  )
}

export default Home
