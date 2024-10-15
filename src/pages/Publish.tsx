import StoryPreview from "../components/StoryPreview"
import Topic from "../components/Topic"

const Publish = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 p-10 gap-14 bg-white flex'>
        <div className="w-1/2">
          <StoryPreview/>
        </div>
        <div>
          <Topic/>
        </div>
    </div>
  )
}

export default Publish