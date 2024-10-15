const LandingFooter = () => {
    return (
    <div className='border border-black h-[8vh]'>
        <ul className='hidden sm:flex justify-center p-4 gap-4 text-sm text-gray-700'>
            <li>Help</li>
            <li>Status</li>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Text to Speech</li>
            <li>Teams</li>
        </ul>
        <ul className='bg-black sm:hidden flex justify-start gap-6 p-4 text-white text-sm pl-7'>
            <li>About</li>
            <li>Help</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
    </div>
  )
}

export default LandingFooter