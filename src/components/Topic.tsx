import React, { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { SETDRAFT } from '../redux/slices/draft.slice'

const Topic = ({setMakePublish}: any) => {

    const username = useAppSelector(store => store.userReducer.username)
    const draft = useAppSelector(store => store.draftReducer)
    const id = useRef<number>()
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let topic = e.target.value
      if (id.current) clearTimeout(id.current)
      id.current = setTimeout(() => dispatch(SETDRAFT({topic})), 1000)
    } 

  return (
    <div className='flex flex-col gap-5'>
        <p className=''>Publishing to: {username}</p>
        <p className='text-sm'>Add or change topics (up to 5) so readers know what your story is about</p>
        <input type="text" onChange={handleChange} className='text-sm outline-none p-4 w-full bg-[#FAFAFA]' placeholder='Add a topic...' />
        <p className='text-gray-600 text-sm'><span className='underline'>Learn more</span> about what happens to your post when you publish</p>
        <div className='mt-4 flex gap-3 items-center text-sm'>
          <button onClick={() => setMakePublish(true)} className="p-2 font-semibold rounded-3xl bg-[#0F730C] text-white">Publish Now</button>
          <p>Schedule for later</p>
        </div>
    </div>
  )
}

export default Topic