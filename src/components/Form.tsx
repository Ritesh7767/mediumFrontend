import React, { useContext, useState } from 'react'
import { EmailContext } from '../context/EmailProvider'
import Input from './Input'
import { userInterface, userRegister, userLogin } from '../zod/user.zod'
import axios from 'axios'
import { server } from '../config/config'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../redux/hooks/hooks'
import { SETUSER } from '../redux/slices/user.slice'

interface errorInterface {
    error: boolean, 
    message: string
}

const Form = () => {

    const emailContext = useContext(EmailContext)
    const [user, setUser] = useState<userInterface>({
        username: "",
        email: "",
        password: ""
    })

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState<errorInterface>()
    const handler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()

            const isDataValid = emailContext?.email.authThrough == "register" ? userRegister.safeParse(user): userLogin.safeParse(user)
            if (!isDataValid.success){
                const result = JSON.parse(isDataValid.error.message)
                if (result.length > 1) {
                    setError({error: true, message: "Invalid Credentials Provided"})
                    return 
                }
                setError({error: true, message: result[0].message})
                return
            }
            
            const {username, email, password} = user

            const body = {
                username,
                email,
                password
            }

            const response = await axios.post(`${server}/user/${emailContext?.email.authThrough}`, body)
            dispatch(SETUSER(response.data.data))
            console.log(response)

            navigate("/home", {replace: true})
        } catch (error: unknown) {

            if (axios.isAxiosError(error)) setError({error: true, message: `${error.response?.data.message}`})
            else setError({error: true, message: `${"Something went wrong, please try again"}`})
        }
    }

  return (
    <>
        <form onSubmit={handler}>
            {emailContext?.email?.authThrough == "register" && <Input label="username" type="text" setUser={setUser} />}
            <Input label="email" type="email" setUser={setUser} />
            <Input label="password" type="password" setUser={setUser} />
            <input className='mt-2 bg-black text-white p-2 font-semibold rounded-3xl cursor-pointer' type="submit" placeholder='Continue' /> 
        </form>
        {error && <span className='text-red-700 font-semibold'>{error.message}</span>}
    </>

  )
}

export default Form