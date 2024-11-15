/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useSocket } from "../context/SocketContext"


const ContactCard = ({item , setSelectedConversation , selectedConversation}) => {

  const {socket} = useSocket()

  const [isOnline , setIsOnline] = useState(false)
  const [onlineUsers , setOnlineUsers] = useState(null)

  const generateStyles = () => {
    
    return (item && selectedConversation) && 
    item.email == selectedConversation.email ? "flex items-center py-4 border-b border-gray-500 border-solid cursor-pointer bg-blue-700 bg-opacity-25 relative" : 
                                               "flex items-center py-4 border-b border-gray-500 border-solid cursor-pointer hover:bg-blue-700 hover:bg-opacity-25 relative"
  }

  useEffect(() => {
    socket.on("onlineUsers",(data) => {
      setOnlineUsers(data)
    })
  })

  useEffect(() => {
    if (onlineUsers && item && onlineUsers.includes(item._id)) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [onlineUsers, item]);
  


  return (
    <div className={generateStyles()} onClick={() => setSelectedConversation(item)} >
        <img src={item.profilePic} alt="" className="w-[50px] h-[50px] rounded-full mx-5"/>
        <h1 className="text-xl text-white">{item.name}</h1>
        
        <div className={isOnline ? "w-3 h-3 bg-green-500 rounded-full absolute left-14 top-4" : "w-3 h-3 bg-red-500 rounded-full absolute left-14 top-4"}>         
        </div>

    </div>

  )
}

export default ContactCard
