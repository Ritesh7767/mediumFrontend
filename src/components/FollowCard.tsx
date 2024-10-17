import ProfileIcon from "./ProfileIcon"

const FollowCard = () => {

  return (
    <div className="flex gap-2">
        <ProfileIcon width="12" height="12"/>
        <div className="">
            <h2 className="text-lg font-bold">William Sidnam</h2>
            <h3 className="text-gray-500 max-h-12 overflow-hidden">New Zealand creative based in Paris. Advertising copywriter & photographer with 3 Medium Staff Picks. Documenting metro posters at www.instagram.com/metrotears/</h3>
        </div>
        <button className="h-12 pr-3 pl-3 border border-black bg-black rounded-3xl text-white">follow</button>
    </div>
  )
}

export default FollowCard