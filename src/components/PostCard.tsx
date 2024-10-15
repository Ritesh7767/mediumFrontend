import { FaHandsClapping } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

const PostCard = () => {
  return (
    <div className="p-6">
        <div className="flex">
            <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <img className="w-8 h-8 rounded-full" src="https://th.bing.com/th?id=OIP.DHVLtvgV0hRBXlnOF-BTGAHaFD&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile-image"/>
                    <p>Will Lockett</p>
                </div>
                <div className="mb-5">
                    <h1 className="font-bold text-2xl mb-3">We've added 77 countries to the Medium Partner Program</h1>
                    <h2 className="h-12 overflow-hidden text-gray-500">Plus a $10 minimum, details about your earnings included in your Partner Program dashboard, and expanding the Boost and Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit veniam eligendi alias aspernatur, ipsam accusamus voluptate sint quasi? Magni neque error harum voluptatum laboriosam aspernatur voluptatem dolorum alias a?</h2>
                </div>
            </div>
            <div className="flex p-4 justify-center items-center">
                <img className="w-4/6" src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*yyRmmTioG_PlQ2t795szMA.jpeg"/>
            </div>
        </div>
        <div className="flex justify-between items-center sm:mr-36">
            <div className="flex gap-4 items-center text-sm">
                <p>Aug 6</p>
                <div className="flex gap-1 items-center">
                    <span className="cursor-pointer"><FaHandsClapping/></span>
                    <span>34,000</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="cursor-pointer"><TbMessageCircleFilled/></span>
                    <span>1089</span>
                </div>
            </div>
            <div className="flex gap-5 text-xl">
                <div className="cursor-pointer">
                    <CiSaveDown2/>
                </div>
                <div className="cursor-pointer">
                    <CiBookmark/>
                </div>
                <div className="cursor-pointer">
                    <FiMoreHorizontal/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCard