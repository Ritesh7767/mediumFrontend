import Navbar from "../components/Navbar"
import PostCard from "../components/PostCard"
import { useAppSelector } from "../redux/hooks/hooks"
import Publish from "./Publish"

const Home = () => {

  const user = useAppSelector(store => store.userReducer)
  // console.log(user)
  // console.log(document.cookie)
  
  return (
    <>
      <Navbar/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </>
    
  )
}

export default Home