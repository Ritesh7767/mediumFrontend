import React from 'react'

const Features = ({featureIcon, featureName}: {featureIcon: React.ReactNode, featureName?: number}) => {
  return (
    <div className="flex gap-1 items-center">
        <span className="cursor-pointer">{featureIcon}</span>
        <span>{featureName}</span>
    </div>
  )
}

export default Features