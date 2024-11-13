import ContactCard from "./ContactCard"


const Sidebar = () => {
  return (

    <div className="">

        <div className="w-full py-5 border-b border-solid border-gray-500 flex justify-center items-center">
            <input type="text" placeholder="Search..." className="border border-black border-solid bg-black rounded-3xl text-white px-5 py-2 w-[80%]"/>
        </div>

        <div className="flex flex-col overflow-y-auto h-[calc(70vh-80px)] scroll-bar">
            {
                Array(20).fill(0).map((item , index) => {
                    return <ContactCard key={index}/>
                })
            }
        </div>

    </div>

  )
}

export default Sidebar
