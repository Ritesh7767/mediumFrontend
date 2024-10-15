import React, { EventHandler, useContext, useState } from 'react'
import LandingNav from '../components/LandingNav'
import Button from '../components/Button'
import LandingFooter from '../components/LandingFooter'
import Signin from './Authorize'
import { LoginContext } from '../context/LoginProvider'
import Authpage from './Authpage'

// const LoginOptions = () => {

//     const loginContext = useContext(LoginContext)

//     const handler = (event: React.MouseEvent<HTMLDivElement>) => {
        
//         loginContext?.setLogin(false)
//         event.stopPropagation()
//     }

//     return (
//         <div onClick={event => handler(event)} className='h-full z-10 absolute left-0 right-0 top-0 bottom-0 bg-white md:bg-transparent'>
//             <Signin/>
//         </div>
//     )
// }

const Landing = () => {

    const loginContext = useContext(LoginContext)

    return (
        <div className='relative'>
            {/* <LoginOptions/> */}
            {/* {loginContext?.login && <LoginOptions/>} */}
            {loginContext?.login && <Authpage/>}
            <div className='bg-[#F7F4ED]' style={{opacity: loginContext?.login ? 0.08 : 1}}>
                <LandingNav/>
                <div className='flex p-5 h-[82vh] '>
                    <div className='flex p-5 gap-5 flex-col'>
                        <article className='text-8xl  sm:text-[7rem] font font-serif'>
                            <span className='text-[1.2em]'>Human</span> stories & ideas
                        </article>
                        <p className='text-xl font-semibold'>A place to read, write, and deepen your understanding</p>
                        <div>
                            <Button content='Start reading' />
                        </div>
                    </div>
                    <div className='w-1/2 hidden md:block max-h-[72.5vh]'>
                        <img className='object-cover w-full h-full' src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" alt="pic" />
                    </div>
                </div>
                <LandingFooter/>
            </div>
        </div>
  )
}

export default Landing