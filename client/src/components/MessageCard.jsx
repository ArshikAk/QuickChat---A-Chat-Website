/* eslint-disable react/prop-types */


const MessageCard = ( {item} ) => {
  return (

    <div className={item.sender == "me" ? "flex flex-row-reverse items-center mb-5" : "flex items-center mb-5"}>

        <img src={"/personLogo.png"} alt="" className="w-[40px] h-[40px] rounded-full"/>

        <div className={item.sender == "me" ? "mx-3 text-white bg-sky-600 px-5 py-3 min-w-[10%] max-w-[60%] text-wrap rounded-2xl rounded-bl-none" : "mx-3 text-white bg-black px-5 py-3 min-w-[10%] max-w-[60%] text-wrap rounded-2xl rounded-br-none"}>
            {item.message}
        </div>

    </div>

  )
}

export default MessageCard
