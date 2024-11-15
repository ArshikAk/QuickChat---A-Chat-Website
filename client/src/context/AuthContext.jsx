/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [user , setUser] = useState(() => {
        const storedUser = localStorage.getItem("chat-user")

        return storedUser ? JSON.parse(storedUser) : null
    })

    useEffect(() => {
        if(user)
        {
            localStorage.setItem("chat-user",JSON.stringify(user))
        }
        else{
            localStorage.removeItem("chat-user") 
        }
    },[user])

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("chat-user")
    }

    return  (
            <AuthContext.Provider value={{user,login,logout}}>
                {children}
            </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext)
}