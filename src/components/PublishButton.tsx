import React, { useContext } from 'react'
import { useAppSelector } from '../redux/hooks/hooks'
import { PublishContext, PublishContextInterface } from '../context/PublishProvider'

const PublishButton = () => {

  const id = useAppSelector(store => store.draftReducer.id)
  const publish = useContext<PublishContextInterface | undefined>(PublishContext)
  return (
    <button onClick={() => publish?.setPublish(true)} disabled={id ? false: true} className="bg-green-600 rounded-2xl pl-3 pr-3 p-1 text-white text-xs font-semibold" style={{opacity: id ? 1: 0.5}} >Publish</button>
  )
}

export default PublishButton