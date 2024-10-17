import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import { SETDRAFT } from '../redux/slices/draft.slice'

const StoryPreview = () => {

  const draft = useAppSelector(store => store.draftReducer)
  let id = useRef<any>()
  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const subtitle = e.target.value || ""
    if (id.current) clearTimeout(id.current)
    id.current = setTimeout(() => dispatch(SETDRAFT({subtitle})), 1000)

  }

  return (
    <div className='flex flex-col gap-2'>
        <h1 className="text-lg font-semibold">Story Preview</h1>
        {
          draft.imageUrl ? (
            <img src={draft.imageUrl} className='w-full h-56 bg-gray-200 object-cover'/>
          ) : (
            <div className='w-full h-56 bg-gray-200 flex justify-center text-center items-center p-20'>
              Include a high-quality image in your story to make it more inviting to readers.
            </div>
          )
        }
        <h2 className='font-bold'>{draft.title}</h2>
        <hr className='' />
        <input type="text" onChange={handleChange} className='p-1 outline-none' placeholder='Write a preview subtitle...' />
        <hr />
        <p className='text-gray-500 text-sm'>
            <span className='text-black'>Note:</span> Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.
        </p>
    </div>
  )
}

export default StoryPreview