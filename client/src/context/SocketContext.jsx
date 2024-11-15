/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./AuthContext"
import { io } from "socket.io-client"

const SocketContext = createContext()

export const SocketProvider = ({children}) => {

    const [socket , setSocket] = useState(null)
    const [onlineUsers , setOnlineUsers] = useState(null)
    const {user} = useAuth()

    useEffect(() => {
        if (user) 
        {
            const newSocket = io("http://localhost:8000" , {
                query : {
                    userId : user._id
                }
            })

            setSocket(newSocket)

            newSocket.on("onlineUsers",(data) => {
                setOnlineUsers(data)
            })
        }
        // else
        // {
        //     setSocket(null)
        // }
    },[user])

    return (
        <SocketContext.Provider value={{socket , onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export const useSocket = () => {
    return useContext(SocketContext)
}