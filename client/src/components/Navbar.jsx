/* eslint-disable react/prop-types */
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";

const Navbar = ({toggleProfileSection}) => {

  const {logout} = useAuth()

  return (
    <div className="py-3 px-2 flex flex-col justify-between items-center h-full">
      <img src={"/personLogo.png"} alt="" className="rounded-full w-[35px] h-[35px] cursor-pointer" onClick={() => toggleProfileSection()} />
      <CiLogout className="text-white cursor-pointer" size={30} onClick={() => logout()}/>
    </div>
  )
}

export default Navbar
