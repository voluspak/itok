import Image from 'next/image'
import Link from 'next/link'

interface Props {
  profileLink: string
  avatar?: string
}
const ProfileControl: React.FC<Props> = ({ profileLink, avatar }: Props) => {
  return (
    <>
      <Link href={profileLink}
        className='w-10 h-10 rounded-full overflow-hidden outline outline-2 outline-white'
      >
        <Image
          src={avatar ?? 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/5f684013d6fc2d94bb0163291e78094c~c5_168x168.jpeg'}
          height={40}
          width={40}
          alt='Avatar thumbnail'
          className='w-10 h-10 rounded-full overflow-hidden outline outline-2 outline-white'
        />
        </Link>
    </>
  )
}

export default ProfileControl
