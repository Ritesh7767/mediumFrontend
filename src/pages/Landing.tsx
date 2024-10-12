import React from 'react'
import LandingNav from '../components/LandingNav'
import Button from '../components/Button'
import LandingFooter from '../components/LandingFooter'

const Landing = () => {
  return (
    <div className='bg-[#F7F4ED]'>
        <LandingNav/>
        <div className='flex p-5'>
            <div className='flex p-5 gap-8 flex-col'>
                <article className='text-8xl  sm:text-9xl font-semibold'>
                    Human stories & ideas
                </article>
                <p className='text-xl font-semibold'>A place to read, write, and deepen your understanding</p>
                <div>
                    <Button content='Start reading' />
                </div>
            </div>
            <div className='w-1/2 hidden lg:block'>
                <img src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="pic" />
            </div>
        </div>
        <LandingFooter/>
    </div>

  )
}

export default Landing