import { useContext } from 'react'
import { LoginContext } from '../context/LoginProvider'
import { EmailContext } from '../context/EmailProvider'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import Authorize from './Authorize'

const Authpage = () => {

    const loginContext = useContext(LoginContext)
    const emailContext = useContext(EmailContext)

    const handler = () => {
        loginContext?.setLogin(false)
    }

    console.log(loginContext?.login, emailContext?.email)

  return (
    <div onClick={handler} className='absolute z-10 left-0 right-0 bottom-0 top-0 flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className='w-screen md:w-1/2 p-24 bg-white shadow-lg'>
            {
              emailContext?.email?.visible ? emailContext?.email?.authThrough == "register" ? <Signin/> : <Signup/> : <Authorize/>
            }
        </div>
    </div>
  )
}

export default Authpage