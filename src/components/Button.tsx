import { Link } from "react-router-dom"

const Button = ({content}: {content: string}) => {
  return (
    <Link to={"/"} className='border border-black whitespace-nowrap p-2 pl-3 pr-3 rounded-3xl bg-black text-white font-semibold'>
        {content}
    </Link>
  )
}

export default Button