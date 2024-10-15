import React, { useEffect } from 'react'
import { server } from '../config/config'
import axios from 'axios'

const Profile = () => {

    const payload = {
        title: "ritesh",
        content: "content"
    }
    
    useEffect(() => {
        axios.post(`${server}/post`, payload, {withCredentials: true})
        .then(response => console.log(response))
    }, [])

  return (
    <div>Profile</div>
  )
}

export default Profile