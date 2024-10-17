import { useRef, useState, useEffect, useContext } from "react"
import StoryNav from "../components/StoryNav"
import axios from "axios"
import { server } from "../config/config"
import Publish from "./Publish"
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks"
import { SETDRAFT} from "../redux/slices/draft.slice"
import { PublishContext, PublishContextInterface } from "../context/PublishProvider"

export interface postInterface {
    title: string,
    content: string,
    image: string, 
}

export interface statusInterface {
    uploaded: boolean
    status: "Saving..." | "Failed" | "Saved",
    id: string | undefined
}

const Write = () => {
    
    const [post, setPost] = useState<postInterface>({
        title: "",
        content: "",
        image: "",
    })

    const draft = useAppSelector(store => store.draftReducer)
    const [status, setStatus] = useState<statusInterface>({
        uploaded: false,
        status: "Saved",
        id: undefined
    })
    const first = useRef(true)
    let id = useRef<any>()
    const dispatch = useAppDispatch()

    const publish = useContext<PublishContextInterface | undefined>(PublishContext)

    useEffect(() => {
        !first.current && (
            async () => {
                if (id.current) clearTimeout(id.current)
                id.current =  setTimeout(async () => {
                    try {
                        const formData = new FormData()
                        formData.append("title", post.title)
                        formData.append("content", post.content)
                        formData.append("image", post.image)

                        setStatus((prev: any) => ({...prev, status: "Saving..."}))
                        let response
                        if (status?.uploaded) {
                            response = await axios.patch(`${server}/post?id=${status.id}`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                                },
                                withCredentials: true,
                            })
                            setStatus((prev: any) => ({...prev, status: "Saved"}))
                        }
                        else {
                            response = await axios.post(`${server}/post`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                                },
                                withCredentials: true
                            })
                            setStatus({uploaded: true, status: "Saved", id: response.data.data.id})
                        }
                        console.log(response)
                        dispatch(SETDRAFT(response?.data.data))
                    } catch (error) {
                        setStatus((prev: any) => ({status: "Failed", uploaded: prev.uploaded, id: prev.id}))
                    }
                }, 1000)
            }
        )()
    }, [post])

    const handler = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        first.current = false
        setPost(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0]
        setPost(prev => ({...prev, [e.target.name]: file}))
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                dispatch(SETDRAFT({imageUrl :reader.result}))
            }
            reader.readAsDataURL(file)
        }
    }

  return (
    <div className="relative md:w-5/6 m-auto">
        <StoryNav status={status}/>    
        <div className="p-7  m-auto">
            <input onChange={handler} value={post.title} name="title" type="text" placeholder="Title" className="mb-1 h-16 p-2 text-3xl outline-none w-full" /><br />
            {!post.image && <button onClick={() => document.getElementById("fileInput")?.click()} >Uplaod Image</button>}
            <input className="hidden" id="fileInput" type="file" name="image" onChange={handleImageChange} />
            {post.image && <div className="relative">

                <img src={draft.imageUrl} onMouseOver={() => {
                    const changeImageElement = document.getElementById("changeImage")
                    if (changeImageElement){
                        changeImageElement.style.display = "flex"
                    } 
                }} 
                
                onMouseOut={() => {
                    const changeImageElement = document.getElementById("changeImage")
                    if (changeImageElement){
                        changeImageElement.style.display = "none"
                    } 
                }}

                />
                <div id="changeImage" onClick={() => document.getElementById("fileInput")?.click()} className="hidden justify-center bg-opacity-30 items-center bg-black absolute border left-0 right-0 top-0 bottom-0" >
                    <p className="text-white font-semibold text-4xl">Click to replace image</p>
                </div>
            </div> 
            }
            <textarea onChange={handler} value={post.content} name="content" id="" placeholder="Tell your story..." className="w-full text-xl p-2 h-screen outline-none resize-none"></textarea>
        </div>
        {publish?.publish && <Publish/>}
    </div>

  )
}

export default Write