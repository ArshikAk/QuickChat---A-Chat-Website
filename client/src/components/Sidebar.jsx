/* eslint-disable react/prop-types */
import { useState } from "react"
import ContactCard from "./ContactCard"
import { useAuth } from "../context/AuthContext"


const Sidebar = ({contacts , setSelectedConversation , selectedConversation }) => {

    const [search , setSearch] = useState("")
    const { user } = useAuth()


  return (

    <div className="">

        <div className="w-full py-5 border-b border-solid border-gray-500 flex justify-center items-center">
            <input type="text" placeholder="Search..." className="border border-black border-solid bg-black rounded-3xl text-white px-5 py-2 w-[80%]" onChange={(e) => setSearch(e.target.value)}/>
        </div>

        <div className="flex flex-col overflow-y-auto h-[calc(70vh-80px)] scroll-bar">
            {
                contacts && contacts.filter(item => item._id != user._id).filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item , index) => {
                    return <ContactCard key={index} item={item} setSelectedConversation={setSelectedConversation} selectedConversation={selectedConversation}/>
                })
            }
        </div>

    </div>

  )
}

export default Sidebar
