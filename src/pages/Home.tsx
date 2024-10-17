import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import PostCard, { postInterface } from "../components/PostCard"
import { useAppSelector } from "../redux/hooks/hooks"
import Publish from "./Publish"
import axios from "axios"
import { server } from "../config/config"
import { draftInterface } from "../redux/slices/draft.slice"
import FollowCard from "../components/FollowCard"
import SavedCard from "../components/SavedCard"
import FollowSection from "../components/FollowSection"
import SavedSection from "../components/SavedSection"

const Home = () => {

  const [post, setPost] = useState<postInterface[]>()

  useEffect(() => {
    axios.get(`${server}/post/get`)
    .then(response => {
      console.log(response)
      setPost(response.data.data)
    })
    .catch(err => console.error(err))
  }, [])

  console.log(post)
  return (
    <>
      <Navbar/>
      <div className="flex ">
        {/* <div>
          {
            post?.map((ele:postInterface) => (
              <PostCard data={ele}/>
            ))
          }
        </div> */}
        <div className="flex flex-col">
          <div>
            {/* <FollowSection/> */}
          </div>
          <div>
            <SavedSection/>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Home