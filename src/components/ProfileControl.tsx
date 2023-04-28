import Link from 'next/link'

interface Props {
  profileLink: string
}
const ProfileControl: React.FC<Props> = ({ profileLink }: Props) => {
  return (
    <>
      <Link href={profileLink}
        className='w-10 h-10 rounded-full overflow-hidden outline outline-2 outline-white'
      >
        outline?
        </Link>
    </>
  )
}

export default ProfileControl
