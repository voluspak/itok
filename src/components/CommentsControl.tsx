import { useState } from 'react'
import { CloseIcon, CommentsIcon, DislikeIcon, LikeIcon } from './Icons'
import Image from 'next/image'
import { useInteraction } from '@/hooks/useInteraction'
import { COMMENTS } from '@/const'

interface ListProps {
  toggleComments: () => void
  isOpen: boolean
}

interface CommentsControlProps {
  commentsCounter: number
}

const CommentsControl: React.FC<CommentsControlProps> = ({ commentsCounter }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleComments = (): void => { setIsOpen(!isOpen) }

  return (
    <>
      <button onClick={toggleComments}>
        <CommentsIcon />
        <span>{commentsCounter}</span>
      </button>
      <ListOfComments toggleComments={toggleComments} isOpen={isOpen} />
  </>
  )
}

export default CommentsControl

const ListOfComments: React.FC<ListProps> = ({ toggleComments, isOpen }) => {
  const { interaction: like, onInteraction: onLikeComment } = useInteraction({ initialValue: 0 })
  const { interaction: dislike, onInteraction: onDislikeComment } = useInteraction({ initialValue: 0 })
  const suggestedSearch = {
    label: 'Example',
    link: 'https://github.com/voluspak'
  }

  const likesCount = 317

  return (
    <section className={`${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 fixed z-10 bottom-0 pb-24 h-4/6 max-w-sm mx-auto w-full bg-white right-0 left-0 text-zinc-900`}>
      <div className='border-b-2 w-full p-4'>
        <h3 className='text-zinc-600 font-bold'>Search: <a className='text-blue-800' href={suggestedSearch.link}>{suggestedSearch.label}</a></h3>
      </div>

      <div className='relative'>
        <button onClick={toggleComments}>
          <CloseIcon className='absolute right-5 top-9 h-5 w-5 text-zinc-900' />
        </button>
        <p className='text-center mt-5 font-bold'>{likesCount} comments</p>
      </div>

      <section className='p-5 flex flex-col gap-4 overflow-y-auto h-full'>
        {COMMENTS.map(comment => (
          <article key={comment.id} className='flex justify-start items-start gap-2'>
            <Image className='rounded-full' src={comment.profile.avatar} alt={comment.profile.name} width={30} height={30} />

            <div className='flex flex-col gap-0.5'>
              <h4 className='font-bold text-zinc-600'>{comment.profile.name}</h4>
              <p>{comment.comment}</p>

              <div className='flex justify-between gap-3 text-zinc-800'>
                <div className='flex items-center gap-3'>
                  <p>{comment.time}</p>
                  <p className='font-bold'>Reply</p>
                </div>

                <div className='flex items-center gap-4'>
                  <button onClick={onLikeComment} className='flex gap-1'>
                    <LikeIcon className={`w-4 h-4 rounded-full active:animate-likeVideo ${like ? 'text-red-500 fill-red-500' : 'text-black fill-white'} overflow-hidden`} />
                    <p>{comment.likes}</p>
                  </button>

                  <button onClick={onDislikeComment} className='flex gap-1'>
                    <DislikeIcon className={`w-4 h-4 rounded-full active:animate-likeVideo ${dislike ? 'text-red-500 fill-red-500' : 'text-black fill-white'} overflow-hidden`} />
                    <p>{comment.likes}</p>
                  </button>
                </div>

              </div>
            </div>
          </article>
        ))}
      </section>
    </section>
  )
}
