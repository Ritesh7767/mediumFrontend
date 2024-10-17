import React from 'react'
import ProfileIcon from './ProfileIcon'

const User = ({username}: {username: string}) => {
  return (
    <div className="flex gap-2 items-center">
        <ProfileIcon width='8' height='8'/>
        <p>{username}</p>
    </div>
  )
}

export default User