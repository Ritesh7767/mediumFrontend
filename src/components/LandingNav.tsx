import Button from "./Button"

const LandingNav = () => {
  return (
    <div className='flex justify-between items-center p-5 pl-6 pr-6 border border-black'>
        <div>
            <h1 className='font-bold text-2xl'>Medium</h1>
        </div>
        <div className=''>
            <ul className='flex text-sm justify-evenly items-center gap-5'>
                <li className='hidden md:block'>Our story</li>
                <li className='hidden md:block'>Membership</li>
                <li className='hidden md:block'>Write</li>
                <li className='hidden sm:block'>Sign in</li>
                <li>
                    <Button content="Get started"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default LandingNav