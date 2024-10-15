import { useContext } from "react"
import { LoginContext } from "../context/LoginProvider"

const Button = ({content}: {content: string}) => {

  const context = useContext(LoginContext)

  return (
    <button onClick={() => context?.setLogin(!context?.login)} className='border border-black whitespace-nowrap p-2 pl-3 pr-3 rounded-3xl bg-black text-white font-semibold'>
        {content}
    </button>
  )
}

export default Button