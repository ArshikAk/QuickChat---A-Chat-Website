/* eslint-disable react/prop-types */

import axios from "axios"
import { useEffect, useState } from "react"


const Profile = ({data}) => {

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [profilePic , setProfilePic] = useState("")

  const [isDataChanged , setIsDataChanged] = useState(false)

  let token = localStorage.getItem("token")
  let config = {
      headers : {
          "Authorization" : `Bearer ${token}`
      }
  }

  useEffect(() => {
    if(data != null)
    {
      setName(data.name)
      setEmail(data.email)
      setProfilePic(data.profilePic)
    }
  },[data])

  useEffect(() => {
    if(data != null)
    {
      if(name == data.name){
        setIsDataChanged(false)
      }
      else{
        setIsDataChanged(true)
      }
    }
  },[name,data])


  const handleSubmit = () => {
    
    axios.put("http://localhost:8000/api/profile/updateProfileData",{name},config)
    .then((result) => {
      if(result.data == "Success")
      {
        data.name = name
        console.log(data)
        setIsDataChanged(false)
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div className="flex flex-col p-5">

      <h1 className="text-2xl text-white">Profile</h1>

      <div className="flex justify-center items-center my-10">
        <img src={profilePic} alt="" className="w-[150px] h-[150px] rounded-full"/>
      </div>

        <div className="flex flex-col my-2">
            <label className="text-gray-300 my-1 font-semibold">Name</label>
            <input type="text" placeholder="" value={name} className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg text-white" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="flex flex-col my-2">
            <label className="text-gray-300 my-1 font-semibold">Email</label>
            <input type="text" placeholder="" value={email} disabled className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg text-white" />
        </div>

        { 
          isDataChanged &&
          <button className="border border-black border-solid bg-black px-3 py-2 my-5 rounded-lg text-white" onClick={() => handleSubmit()} >Save Changes</button>
        }
    </div>
  
  )
}

export default Profile
