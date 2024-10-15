import { createContext, useState } from "react";

export interface LoginProviderType {
    login: boolean, 
    setLogin: (login: boolean) => void
}

export const LoginContext = createContext<LoginProviderType | undefined>(undefined)

const LoginProvider = ({children}: {children: React.ReactNode}) => {

    const [login, setLogin] = useState<boolean>(false)
    return (
        <LoginContext.Provider value={{login, setLogin}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider