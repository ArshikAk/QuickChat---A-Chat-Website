import MessageContainer from "../components/MessageContainer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import { useEffect, useState } from "react"
import axios from "axios"


const Home = () => {

    const [openProfile , setOpenProfile] = useState(false)
    const [contacts , setContacts] = useState([])
    const [profileData , setProfileData] = useState(null)
    const [selectedConversation , setSelectedConversation] = useState(null)

    let token = localStorage.getItem("token")
    let config = {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    }

    const toggleProfileSection = () => {
        setOpenProfile(!openProfile)
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/contact/getContacts")
        .then((result) => {
            setContacts(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

    useEffect(() => {
        axios.get("http://localhost:8000/api/profile/getProfileData",config)
        .then((result) => {
            setProfileData(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
    },[])

  return (

    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
        
        <div className="rounded-2xl rounded-l-none shadow-2xl bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 w-[70%] h-[70%] flex">

            <div className="w-[5%] border-r border-solid border-gray-500">
                <Navbar toggleProfileSection={toggleProfileSection} />
            </div>
            
            <div className="w-[25%] border-r border-solid border-gray-500" style={openProfile ? {display : "none"} : {display : "block"}} >
                <Sidebar contacts={contacts} selectedConversation={selectedConversation} setSelectedConversation={setSelectedConversation}/>
            </div>

            <div className="w-[25%] border-r border-solid border-gray-500" style={openProfile ? {display : "block"} : {display : "none"}} >
                <Profile data={profileData}/>
            </div>

            <div className="w-[70%]">
                <MessageContainer selectedConversation={selectedConversation}/>
            </div>

        </div>
    </div>
  )
}

export default Home
