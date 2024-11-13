/* eslint-disable react/prop-types */


const ContactCard = ({item}) => {
  return (

    <div className="flex items-center py-4 border-b border-gray-500 border-solid cursor-pointer hover:bg-blue-700 hover:bg-opacity-25">
        <img src={item.profilePic} alt="" className="w-[50px] h-[50px] rounded-full mx-5"/>
        <h1 className="text-xl text-white">{item.name}</h1>
    </div>

  )
}

export default ContactCard
