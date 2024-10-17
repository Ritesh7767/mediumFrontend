const Title = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <div className="">
        <h1 className="font-bold sm:text-xl mb-3 max-h-[15vh] overflow-hidden">{title}</h1>
        <h2 className="overflow-hidden text-gray-500 max-h-[12vh]">{subtitle}</h2>
    </div>
  )
}

export default Title