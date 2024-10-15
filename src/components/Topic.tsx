import React from 'react'
import { useAppSelector } from '../redux/hooks/hooks'
import PublishButton from './PublishButton'

const Topic = () => {

    const username = useAppSelector(store => store.userReducer.username)
  return (
    <div className='flex flex-col gap-5'>
        <p className=''>Publishing to: {username}</p>
        <p className='text-sm'>Add or change topics (up to 5) so readers know what your story is about</p>
        <input type="text" className='text-sm outline-none p-4 w-full bg-[#FAFAFA]' placeholder='Add a topic...' />
        <p className='text-gray-600 text-sm'><span className='underline'>Learn more</span> about what happens to your post when you publish</p>
        <div className='mt-4 flex gap-3 items-center text-sm'>
          <button className="p-2 font-semibold rounded-3xl bg-[#0F730C] text-white">Publish Now</button>
          <p>Schedule for later</p>
        </div>
    </div>
  )
}

export default Topic