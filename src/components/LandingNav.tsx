import { useContext } from "react"
import Button from "./Button"
import { LoginContext, LoginProviderType } from "../context/LoginProvider"
import Icon from "./Icon"

const LandingNav = () => {

    const loginContext = useContext<LoginProviderType | undefined>(LoginContext)
  return (
    <div className='flex justify-between items-center h-[10vh] p-5 pl-6 pr-6 border border-black'>
        <div>
            <Icon/>
        </div>
        <div className=''>
            <ul className='flex text-sm justify-evenly items-center gap-5'>
                <li className='hidden md:block'>Our story</li>
                <li className='hidden md:block'>Membership</li>
                <li className='hidden md:block'>Write</li>
                <li className='hidden sm:block'>Sign in</li>
                <li>
                    <Button content="Get started "/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LandingNav