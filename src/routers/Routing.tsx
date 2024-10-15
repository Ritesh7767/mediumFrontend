import {Routes, Route} from 'react-router-dom'
import Landing from '../pages/Landing'
import Home from '../pages/Home'
import Write from '../pages/Write'
import Profile from '../pages/Profile'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='new-story' element={<Write/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default Routing