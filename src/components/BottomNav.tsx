import Link from 'next/link'
import React from 'react'
import { ChatIcon, FriendsIcon, HomeIcon, PlusIcon, UserIcon } from './Icons'

const BOTTOM_NAV_ITEMS_STYLE = 'flex flex-col justify-center items-center'

const BottomNav: React.FC = () => {
  return (
    <nav className='absolute bottom-0 left-0 right-0 h-12 py-2 border-t border-zinc-500 bg-black text-white'>
    <ul className='flex justify-evenly items-center'>
      <li>
        <Link href={'/'} className={BOTTOM_NAV_ITEMS_STYLE}>
          <HomeIcon />
          Home
        </Link>
      </li>
      <li>
        <Link href={'/'} className={`${BOTTOM_NAV_ITEMS_STYLE} pt-0.5`}>
          <FriendsIcon />
          Friends
          </Link>
      </li>
      <li>
        <Link href={'/'} className={`${BOTTOM_NAV_ITEMS_STYLE} bg-white px-3 py-1 rounded-lg`}>
          <PlusIcon />
        </Link>
      </li>
      <li>
        <Link href={'/'} className={`${BOTTOM_NAV_ITEMS_STYLE}`}>
          <ChatIcon />
          Inbox
        </Link>
      </li>
      <li>
        <Link href={'/'} className={BOTTOM_NAV_ITEMS_STYLE}>
          <UserIcon />
          Profile
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default BottomNav
