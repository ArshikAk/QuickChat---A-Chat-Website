/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import MessageCard from "./MessageCard"
import axios from "axios"
import { useAuth } from "../context/AuthContext"
import useListenMessage from "../hooks/useListenMessage"


const MessageContainer = ({ selectedConversation }) => {

  const [messages , setMessages] = useState(null)
  const [message , setMessage] = useState("")
  const {user} = useAuth()

  useListenMessage(messages,setMessages)

  let token = localStorage.getItem("token")
  let config = {
      headers : {
          "Authorization" : `Bearer ${token}`
      }
  }

  useEffect(() => {
    if(selectedConversation)
    {
      axios.get(`http://localhost:8000/api/messages/getMessages/${selectedConversation._id}`,config)
      .then((result) => {
        setMessages(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },[selectedConversation])

  const sendMessage = () => {
    if(selectedConversation)
    {
        const receiverId = selectedConversation._id
        axios.post("http://localhost:8000/api/messages/sendMessage",{receiverId , message},config)
        .then((result) => {
            if(result.data == "Message sent successfully")
            {
              
              setMessage("")

              let temp = messages
              temp.push({
                senderId : user._id,
                receiverId : receiverId,
                message : message
              })
              setMessages(temp)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
  }

  // useEffect(() => {
  //   console.log(selectedConversation)
  // },[selectedConversation])

  return (

    <>

      <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0" style={selectedConversation ? {display : "block"} : {display : "none"}}>

        {
          selectedConversation && 
          <div className="h-[80px] py-[10px] px-5 flex items-center border-b border-solid border-gray-500">
            <img src={selectedConversation.profilePic} alt="" className="w-[50px] h-[50px] rounded-full"/>
            <h1 className="text-white mx-5 text-xl">{selectedConversation.name}</h1>
          </div>
        }

        <div className="p-5 overflow-y-auto h-[calc(70vh-160px)] scroll-bar" style={messages ? {display : "block"} : {display : "none"}}>
          { 
            messages &&
            messages.map((message,index) => {
              return <MessageCard key={index} item={message} receiver={selectedConversation}/>
            })
          }
        </div>

        <div className="p-5 h-[calc(70vh-160px)] flex flex-col justify-center items-center" style={messages ? {display : "none"} : {display : "flex"}}>
          <h1 className="text-2xl text-white">No Messages</h1>
          <p className="text-white my-3">Send a message to start the conversation...</p>
        </div>

        <div className="h-[80px] py-[10px] px-5 flex justify-between items-center border-t border-solid border-gray-500">
          <input type="text" placeholder="Send a message..." value={message} className="border border-black border-solid bg-black w-[85%] py-3 px-5 text-white rounded-lg" onChange={(e) => setMessage(e.target.value)} />
          <button className="border border-solid border-blue-700 bg-blue-700 text-white px-10 py-3 rounded-lg mx-5" onClick={() => sendMessage()} >Send</button>
        </div>
      </div>

      <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-col justify-center items-center h-full" style={selectedConversation ? {display : "none"} : {display : "flex"}}>
          
          <h1 className="text-2xl text-white">No Conversation Selected</h1>

          <p className="my-3 text-white">Select a contact to start messaging...</p>
      </div>
    </>
  )
}

export default MessageContainer
