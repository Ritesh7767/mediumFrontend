import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useContext, useState } from "react";
import { EmailContext } from "../context/EmailProvider";

const SigninOptions = ({icon, authProvider}: {icon: React.ReactNode, authProvider: string | React.ReactNode}) => {
    return (
        <div className="flex gap-x-14 items-center cursor-pointer w-72 md:w-80 h-10 whitespace-nowrap p-1 pl-2 pr-3 border border-black rounded-3xl ">
            <p className="text-xl">{icon}</p>
            <p className="flex items-center gap-1">Sign up with {authProvider}</p>
        </div>
    )
} 

const Authorize = () => {

    const [login, setLogin] = useState<boolean>(false)
    const emailContext = useContext(EmailContext)

    const handler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
        emailContext?.setEmail({visible: true, authThrough: login ? "login": 'register'})
    }

  return (
    <div onClick={handler} className="box-border text-center">
        <h1 className=" mt-28 text-3xl font-serif">{login ? "Welcome Back" : "Join Now"}</h1>
        <div className=" mt-20 flex flex-col gap-y-2 items-center">
            <SigninOptions icon={<FcGoogle/>} authProvider="Google"/>
            <SigninOptions icon={<FaFacebook/>} authProvider="Facebook"/>
            {login && <SigninOptions icon={<FaApple/>} authProvider="Apple"/>}
            {login && <SigninOptions icon={<BsTwitterX/>} authProvider={<BsTwitterX/>}/>}
            <span onClick={handleClick}>
                <SigninOptions icon={<GoMail/>} authProvider="Mail"/>
            </span>
        </div>
        <p className="mt-6">{login ? "No Account? " :"Already have an account? "}<span onClick={() => setLogin(prev => !prev)} className="text-green-800 font-semibold cursor-pointer">{login ? "Create One": "Sign in"}</span></p>
        <article className="text-sm  text-gray-700 mt-8 mb-8">
            Click “Sign up” to agree to Medium’s <span className="underline"> Terms of Service </span>and acknowledge that Medium’s <span className="underline"> Privacy Policy </span> applies to you.
        </article>
    </div>
  )
}

export default Authorize