import React from 'react'

const StoryPreview = () => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className="text-lg font-semibold">Story Preview</h1>
        <img src="" className='w-full h-56 bg-gray-200'/>
        {/* <div className='w-full h-56 bg-gray-200 flex justify-center text-center items-center p-20'>
          Include a high-quality image in your story to make it more inviting to readers.
        </div> */}
        <h2 className='font-bold'>hii</h2>
        <hr className='' />
        <input type="text" className='p-1 outline-none' placeholder='Write a preview subtitle...' />
        <hr />
        <p className='text-gray-500 text-sm'>
            <span className='text-black'>Note:</span> Changes here will affect how your story appears in public places like Medium’s homepage and in subscribers’ inboxes — not the contents of the story itself.
        </p>
    </div>
  )
}

export default StoryPreview