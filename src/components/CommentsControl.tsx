import { useState } from 'react'
import { CloseIcon, CommentsIcon, LikeIcon } from './Icons'
import Image from 'next/image'
import { useLike } from '@/hooks/useLike'

interface ListProps {
  toggleComments: () => void
}

const CommentsControl: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleComments = (): void => { setIsOpen(!isOpen) }

  return (
    <>
      <button onClick={toggleComments}>
        <CommentsIcon />
      </button>
      {isOpen && <ListOfComments toggleComments={toggleComments} />}
  </>
  )
}

export default CommentsControl

const ListOfComments: React.FC<ListProps> = ({ toggleComments }) => {
  const { like, onLikeVideo } = useLike()
  const suggestedSearch = {
    label: 'Example',
    link: 'https://github.com/voluspak'
  }

  const COMMENTS = [
    {
      id: 1,
      profile: {
        link: 'https://github.com/voluspak',
        avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
        name: 'IvanChoooo'
      },
      comment: 'Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.',
      time: '2d',
      likes: 441
    },
    {
      id: 2,
      profile: {
        link: 'https://github.com/voluspak',
        avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
        name: 'IvanChoooo'
      },
      comment: 'Jovencillo emponzoñado de whisky: ¡Qué figurota exhibe!',
      time: '2d',
      likes: 441
    },
    {
      id: 3,
      profile: {
        link: 'https://github.com/voluspak',
        avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
        name: 'IvanChoooo'
      },
      comment: 'Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú',
      time: '2d',
      likes: 441
    },
    {
      id: 4,
      profile: {
        link: 'https://github.com/voluspak',
        avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
        name: 'IvanChoooo'
      },
      comment: 'Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.',
      time: '2d',
      likes: 441
    }
  ]

  const likesCount = 317

  return (
    <section className='fixed z-10 bottom-0 h-4/6 max-w-sm mx-auto w-full bg-white right-0 left-0 text-zinc-900'>
      <div className='border-b-2 w-full p-4'>
        <h3 className='text-zinc-600 font-bold'>Search: <a className='text-blue-800' href={suggestedSearch.link}>{suggestedSearch.label}</a></h3>
      </div>

      <div className='relative'>
        <button onClick={toggleComments}>
          <CloseIcon className='absolute right-5 top-9 h-5 w-5 text-zinc-900' />
        </button>
        <p className='text-center mt-5 font-bold'>{likesCount} comments</p>
      </div>

      <section className='p-5 flex flex-col gap-4 overflow-y-auto'>
        {COMMENTS.map(comment => (
          <article key={comment.id} className='flex justify-start items-start gap-2'>
            <Image className='rounded-full' src={comment.profile.avatar} alt={comment.profile.name} width={30} height={30} />

            <div className='flex flex-col gap-0.5'>
              <h4 className='font-bold text-zinc-600'>{comment.profile.name}</h4>
              <p>{comment.comment}</p>

              <div className='flex gap-3 text-zinc-800'>
                <p>{comment.time}</p>
                <p className='font-bold'>Reply</p>

                <button onClick={onLikeVideo} className='flex gap-1'>
                  <LikeIcon className={`w-4 h-4 rounded-full active:animate-likeVideo ${like ? 'text-red-500 fill-red-500' : 'text-black fill-white'} overflow-hidden`} />
                  <p>{comment.likes}</p>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
