import MessageContainer from "../components/MessageContainer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import { useState } from "react"


const Home = () => {

    const [openProfile , setOpenProfile] = useState(false)

    const toggleProfileSection = () => {
        setOpenProfile(!openProfile)
    }

  return (

    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
        
        <div className="rounded-2xl rounded-l-none shadow-2xl bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 w-[70%] h-[70%] flex">

            <div className="w-[5%] border-r border-solid border-gray-500">
                <Navbar toggleProfileSection={toggleProfileSection} />
            </div>
            
            <div className="w-[25%] border-r border-solid border-gray-500" style={openProfile ? {display : "none"} : {display : "block"}} >
                <Sidebar/>
            </div>

            <div className="w-[25%] border-r border-solid border-gray-500" style={openProfile ? {display : "block"} : {display : "none"}} >
                <Profile/>
            </div>

            <div className="w-[70%]">
                <MessageContainer/>
            </div>

        </div>
    </div>
  )
}

export default Home
