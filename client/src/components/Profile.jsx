

const Profile = () => {
  return (
    <div className="flex flex-col p-5">

      <h1 className="text-2xl text-white">Profile</h1>

      <div className="flex justify-center items-center">
        <img src={"/personLogo.png"} alt="" className="w-[60%] h-[60%] rounded-full my-10"/>
      </div>

        <div className="flex flex-col my-2">
            <label className="text-gray-300 my-1 font-semibold">Name</label>
            <input type="text" placeholder="Arshik" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg" />
        </div>

        <div className="flex flex-col my-2">
            <label className="text-gray-300 my-1 font-semibold">Email</label>
            <input type="text" placeholder="ak@gmail.com" disabled className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg" />
        </div>

        <button className="border border-black border-solid bg-black px-3 py-2 my-5 rounded-lg text-white">Save Changes</button>
    </div>
  )
}

export default Profile
