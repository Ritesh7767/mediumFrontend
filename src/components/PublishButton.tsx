import React from 'react'

const PublishButton = ({id}: any) => {

  return (
    <button disabled={id ? false: true} className="bg-green-600 rounded-2xl pl-3 pr-3 p-1 text-white text-xs font-semibold" style={{opacity: id ? 1: 0.5}} >Publish</button>
  )
}

export default PublishButton