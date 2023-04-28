import Controls from '@/components/Controls'
import { HomeIcon, MagnifyingGlass } from '@/components/Icons'
import Link from 'next/link'
import { type FC } from 'react'

const Home: FC = () => {
  return (
    <>
      <main className='bg-black text-white max-w-sm w-full h-screen mx-auto p-3 relative text-xs'>
        <nav className='relative'>
          <ul className='flex justify-center items-center gap-3'>
            <li><Link href={'/'}>Following</Link></li>
            <li><Link href={'/'} className='underline'>For You</Link></li>
          </ul>
        <Link href={'/'} className='absolute top-0 right-0'><MagnifyingGlass /></Link>
        </nav>

        <Controls />

        <nav className='absolute bottom-0 left-0 right-0 h-12 py-2 border-t border-zinc-500 bg-black text-white'>
          <ul className='flex justify-evenly items-center'>
            <li>
              <Link href={'/'} className='flex flex-col justify-center items-center'>
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'}>Friends</Link>
            </li>
            <li>
              <Link href={'/'}>+</Link>
            </li>
            <li>
              <Link href={'/'}>Inbox</Link>
            </li>
            <li>
              <Link href={'/'}>Profile</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}

export default Home
