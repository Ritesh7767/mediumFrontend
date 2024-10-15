import { IoSearchOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-black flex justify-between items-center p-2 pl-7 pr-7">
        <div className="flex items-center gap-4">
            <Icon/>
            <div className="hidden sm:flex items-center bg-[#F9F9F9] rounded-3xl p-2">
                <IoSearchOutline/>
                <input type="text" placeholder="Search" className="bg-[#F9F9F9] outline-none ml-2" />
            </div>
        </div>
        <div className="flex items-center gap-7 text-xl">
            <div className="sm:hidden">
                <IoSearchOutline/>
            </div>
            <Link to={"/new-story"} className="hidden md:flex items-center gap-2 cursor-pointer">
                    <TfiWrite/>
                <span className="text-base">Write</span>    
            </Link>
            <div className="cursor-pointer">
                <GoBell/>
            </div>
            <div className="cursor-pointer text-2xl">
                <CgProfile/>
            </div>
        </div>
    </div>
  )
}

export default Navbar