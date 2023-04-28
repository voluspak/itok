import ProfileControl from './ProfileControl'

const profileLink: string = ''

const Controls: React.FC = () => {
  return (
    <ul className='absolute right-3 bottom-3 flex flex-col justify-end items-center gap-5'>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
      <li><ProfileControl profileLink={profileLink} /></li>
    </ul>
  )
}

export default Controls
