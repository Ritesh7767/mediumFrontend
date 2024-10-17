
import User from "./User";
import Title from "./Title";
import LCS from "./LCS";

interface userInterface {

    id: string,
    description: string | null,
    image: string,
    username: string,
    _count: {
        Following: number
    }
}

export interface postInterface {

    date: string,
    id: string,
    image: string,
    subtitle: string | null,
    title: string, 
    user: userInterface,
    _count: {
        Comment: number,
        Like: number
    }
}

const PostCard = ({data}: {data: postInterface}) => {

    const {date, id, image, subtitle, title, user, _count: {Comment, Like}} = data
    const {id: userId, image: userImage, username, _count: {Following} } = user

  return (
    <div className="p-6">
        <div className="flex">
            <div className="flex flex-col gap-4 w-3/5">
                <User username={username}/>
                <Title title={title} subtitle={subtitle || ""} />
                <LCS date={date} Like={Like} Comment={Comment} />        
            </div>
            <div className="flex w-2/5 justify-center items-center">
                <img className="w-full rounded-md" src={image}/>
            </div>
        </div>
    </div>
  )
}

export default PostCard