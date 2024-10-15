import { useRef, useState, useEffect } from "react"
import StoryNav from "../components/StoryNav"
import axios from "axios"
import { server } from "../config/config"
import Publish from "./Publish"
import { useAppDispatch } from "../redux/hooks/hooks"

export interface postInterface {
    title: string,
    content: string,
    image: string, 
}

export interface statusInterface {
    uploaded: boolean
    status: "Saving" | "Failed" | "Saved",
    id: string
}

const Write = () => {
    
    const [post, setPost] = useState<postInterface>({
        title: "",
        content: "",
        image: "",
    })
    
    const [previewImage, setPreviewImage] = useState<any>()
    const [status, setStatus] = useState<statusInterface>()
    const first = useRef(true)
    let id = useRef<any>()
    const dispatch = useAppDispatch()
    
    axios.defaults.withCredentials = true
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

                        setStatus((prev: any) => ({...prev, status: "Saving"}))
                        let response
                        if (status?.uploaded) {
                            response = axios.patch(`${server}/post?id=${status.id}`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                                withCredentials: true,
                            })
                            setStatus((prev: any) => ({...prev, status: "Saved"}))
                        }
                        else {
                            response = await axios.post(`${server}/post`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                                withCredentials: true
                            })
                            setStatus({uploaded: true, status: "Saved", id: response.data.data.id})
                        }
                        console.log(response)
                    } catch (error) {
                        setStatus((prev: any) => ({status: prev.status, uploaded: prev.uploaded, id: prev.id}))
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
                setPost(prev => ({...prev, "imageUrl": reader.result}))
                setPreviewImage(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    console.log(document.cookie)
    
  return (
    <div className="relative md:w-5/6 m-auto">
        <StoryNav id={status?.id}/>    
        <div className="p-7  m-auto">
            <input onChange={handler} value={post.title} name="title" type="text" placeholder="Title" className="mb-1 h-16 p-2 text-3xl outline-none w-full" /><br />
            {!post.image && <button onClick={() => document.getElementById("fileInput")?.click()} >Uplaod Image</button>}
            <input className="hidden" id="fileInput" type="file" name="image" onChange={handleImageChange} />
            {post.image && <div className="relative">

                <img src={previewImage} onMouseOver={() => {
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
        {/* <Publish/> */}
    </div>

  )
}

export default Write