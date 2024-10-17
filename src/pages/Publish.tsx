import { useContext, useEffect, useState } from "react"
import StoryPreview from "../components/StoryPreview"
import Topic from "../components/Topic"
import axios from "axios"
import { server } from "../config/config"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { useNavigate } from "react-router-dom"
import { initialDraftState, SETDRAFT } from "../redux/slices/draft.slice"
import { PublishContext, PublishContextInterface } from "../context/PublishProvider"

const Publish = () => {

  const [makePublish, setMakePublish] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const draft = useAppSelector(store => store.draftReducer)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const publish = useContext<PublishContextInterface | undefined>(PublishContext)

  useEffect(() => {
    console.log("clicked")
    makePublish && axios.post(`${server}/post/publish?id=${draft.id}`,
      {
        title: draft.title,
        subtitle: draft.subtitle
      },
      {
        headers: {
          "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
      }
    )
    .then(response => {
      dispatch(SETDRAFT(initialDraftState))
      setMakePublish(false)
      setError(false)
      navigate("/home", {replace: true})
      publish?.setPublish(false)
    })
    .catch(error => {
      console.error(error)
      setError(true)
    })
    setMakePublish(false)
  }, [makePublish])

  return (
    <>
      <div className='absolute top-0 bottom-0 left-0 right-0 p-10 bg-white'>
        <div className="md:flex gap-14">
            <div className=" mb-9">
              <StoryPreview/>
            </div>
            <div>
              <Topic setMakePublish={setMakePublish}/>
            </div>
        </div>
      {
        error && <div className="text-center">
          <span className="text-red-700 font-semibold">Something went wrong while publishing your post, please try again</span>
        </div>
      }
      </div>
    </>
  )
}

export default Publish