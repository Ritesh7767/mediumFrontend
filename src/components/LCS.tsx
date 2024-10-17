import { FaHandsClapping } from "react-icons/fa6";
import { TbMessageCircleFilled } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import Features from "./Features";

const LCS = ({date, Like, Comment}: {date: string, Like: number, Comment: number}) => {

    const postDate = new Date(date).getUTCDate()
    const postMonth = new Date(date).toUTCString().split(" ")[2]

  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center text-sm">
            <p>{`${postDate} ${postMonth}`}</p>
              <Features featureIcon={<FaHandsClapping/>} featureName={Like} />
              <Features featureIcon={<TbMessageCircleFilled/>} featureName={Comment} />
        </div>
        <div className="flex gap-5 text-xl">
            <div className="gap-4 items-center hidden sm:flex">
              <Features featureIcon={<CiSaveDown2/>}/>
              <Features featureIcon={<CiBookmark/>}/>
              <Features featureIcon={<FiMoreHorizontal/>}/>
            </div>
        </div>
    </div>
  )
}

export default LCS