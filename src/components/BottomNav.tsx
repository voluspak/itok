import Link from 'next/link'
import React from 'react'
import { HomeIcon } from './Icons'

const BottomNav: React.FC = () => {
  return (
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
  )
}

export default BottomNav
