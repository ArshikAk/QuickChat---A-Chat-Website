import { useState } from "react"
import MessageCard from "./MessageCard"


const MessageContainer = () => {

  const [messages , setMessages] = useState([
    { message : "Hi",sender : "me"},
    { message : "How are you",sender : "other"},
    { message : "I am Ak",sender : "me"},
    { message : "Myself raj",sender : "other"},
    { message : "Hello",sender : "me"},
    { message : "Hi",sender : "me"},
    { message : "How are you",sender : "other"},
    { message : "I am Ak",sender : "me"},
    { message : "Myself raj",sender : "other"},
    { message : "Hello",sender : "me"},
    { message : "Hi",sender : "me"},
    { message : "How are you",sender : "other"},
    { message : "I am Ak",sender : "me"},
    { message : "Myself raj",sender : "other"},
    { message : "Hello",sender : "me"},
  ])

  return (

    <div className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

      <div className="h-[80px] py-[10px] px-5 flex items-center border-b border-solid border-gray-500">
          <img src={"/personLogo.png"} alt="" className="w-[50px] h-[50px] rounded-full"/>
          <h1 className="text-white mx-5 text-xl">Arshik Kalarikkal</h1>
      </div>

      <div className="p-5 overflow-y-auto h-[calc(70vh-160px)] scroll-bar">
        {
          messages.map((message,index) => {
            return <MessageCard key={index} item={message}/>
          })
        }
      </div>

      <div className="h-[80px] py-[10px] px-5 flex justify-between items-center border-t border-solid border-gray-500">
        <input type="text" placeholder="Send a message..." className="border border-black border-solid bg-black w-[85%] py-3 px-5 text-white rounded-lg"/>
        <button className="border border-solid border-blue-700 bg-blue-700 text-white px-10 py-3 rounded-lg mx-5">Send</button>
      </div>
    </div>
  )
}

export default MessageContainer
