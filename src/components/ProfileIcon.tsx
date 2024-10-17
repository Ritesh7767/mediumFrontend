import React from 'react'

const ProfileIcon = ({width, height}: {width: string, height: string}) => {
  return (
    <img className={`w-${width} h-${height} rounded-full`} src="https://th.bing.com/th?id=OIP.DHVLtvgV0hRBXlnOF-BTGAHaFD&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile-image"/>
  )
}

export default ProfileIcon