/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthContext"

const MessageCard = ( {item , receiver} ) => {

  const {user} = useAuth()


  return (

    <div className={item.senderId == user._id ? "flex flex-row-reverse items-center mb-5 relative" : "flex items-center mb-5 relative"}>

        <img src={item.senderId ==  user._id ? user.profilePic : receiver.profilePic} alt="" className="w-[40px] h-[40px] rounded-full"/>

        <div className={item.senderId == user._id ? "mx-3 text-white bg-sky-600 px-5 py-3 min-w-[10%] max-w-[60%] text-wrap rounded-2xl rounded-br-none" : "mx-3 text-white bg-black px-5 py-3 min-w-[10%] max-w-[60%] text-wrap rounded-2xl rounded-bl-none"}>
            {item.message}
        </div>

    </div>

  )
}

export default MessageCard
