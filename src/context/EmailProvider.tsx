import { createContext, useState } from "react"

interface emailInterface {
    visible: boolean, 
    authThrough: "register" | "login",
}

export interface EmailContextInterface {
    email: emailInterface,
    setEmail: ({visible, authThrough}: emailInterface) => void
}

export const EmailContext = createContext<EmailContextInterface | undefined>(undefined)

export const EmailProvider = ({children}: {children: React.ReactNode}) => {
    
    const [email, setEmail] = useState<emailInterface>({
        visible: false,
        authThrough: "register"
    })

    return (
        <EmailContext.Provider value={{email, setEmail}}>
            {children}
        </EmailContext.Provider>
    )
}

export default EmailProvider