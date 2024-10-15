import { FiMoreHorizontal } from "react-icons/fi"
import Icon from "../components/Icon"
import { GoBell } from "react-icons/go"
import { CgProfile } from "react-icons/cg"
import { useAppSelector } from "../redux/hooks/hooks"
import PublishButton from "./PublishButton"

const StoryNav = ({id}: any) => {

    const username = useAppSelector(store => store.userReducer)

  return (
    <div className="flex justify-between p-4 items-center">
        <div className="flex items-center gap-4">
            <div>
                <Icon/>
            </div>
            <div>
                <p className="text-sm">Draft in {username.username}</p>
            </div>
        </div>
        <div className="flex gap-8 items-center text-xl">
            <div className="">
                <PublishButton id={id}/>
            </div>
            <div>
                <FiMoreHorizontal/>
            </div>
            <div>
                <GoBell/>
            </div>
            <div>
                <CgProfile/>
            </div>
        </div>
    </div>
    )
}

export default StoryNav