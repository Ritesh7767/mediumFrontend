import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { EmailContext } from "../context/EmailProvider";
import Form from '../components/Form'

const Email = ({title, subtitle}: {title: string, subtitle: string}) => {

    const emailContext = useContext(EmailContext)
  return (
    <div className="flex flex-col gap-10 text-center">
        <h1 className="text-3xl">{title}</h1>
        <p>{subtitle}</p>
        <Form/>
        <span onClick={() => emailContext?.setEmail({visible: false, authThrough: emailContext.email.authThrough})} className="text-green-800 flex justify-center items-center gap-1 cursor-pointer"><IoIosArrowBack/>{" All sign in options"}</span>
    </div>
  )
}

export default Email