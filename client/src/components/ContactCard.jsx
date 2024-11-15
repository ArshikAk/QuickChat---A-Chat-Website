/* eslint-disable react/prop-types */


const ContactCard = ({item , setSelectedConversation , selectedConversation={selectedConversation}}) => {

  const generateStyles = () => {
    
    return (item && selectedConversation) && 
    item.email == selectedConversation.email ? "flex items-center py-4 border-b border-gray-500 border-solid cursor-pointer bg-blue-700 bg-opacity-25" : 
                                               "flex items-center py-4 border-b border-gray-500 border-solid cursor-pointer hover:bg-blue-700 hover:bg-opacity-25"
  }


  return (
    <div className={generateStyles()} onClick={() => setSelectedConversation(item)} >
        <img src={item.profilePic} alt="" className="w-[50px] h-[50px] rounded-full mx-5"/>
        <h1 className="text-xl text-white">{item.name}</h1>
    </div>

  )
}

export default ContactCard
