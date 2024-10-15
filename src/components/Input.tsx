import { userInterface } from "../zod/user.zod"

const Input = ({label, type, setUser}: {label: string, type: string, setUser: any}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev: userInterface) => ({...prev, [e.target.name]: e.target.value}))
    }
  return (
    <div className="flex flex-col justify-center items-center gap-3">
        <label className="">Your {label}</label>
        <input onChange={handleChange} name={label} className="w-4/5 bg-gray-200 outline-none text-center rounded-sm h-10 mb-2" autoComplete="off" type={type} />
    </div>
  )
}

export default Input