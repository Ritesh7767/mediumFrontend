import { useState, createContext } from "react";

export interface PublishContextInterface {
    publish: boolean,
    setPublish: (publish: boolean) => void
}

export const PublishContext = createContext<PublishContextInterface | undefined>(undefined)

const PublishProvider = ({children}: {children: React.ReactNode}) => {

    const [publish, setPublish] = useState<boolean>(false)
    
    return (
        <PublishContext.Provider value={{publish, setPublish}}>
            {children}
        </PublishContext.Provider>
    )
}

export default PublishProvider