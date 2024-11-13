import axios from "axios"
import { useState } from "react"
import { useNavigate , Link } from "react-router-dom"

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        
        axios.post("http://localhost:8000/api/auth/login",{email,password})
        .then((result) => {
            if(result.data.message == "Success")
            {
                navigate("/")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
        
        <div className="p-10 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            
            <h1 className="text-3xl text-white text-center">LOGIN <span className="text-2xl text-blue-500">QuickChat</span></h1>

            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Email</label>
                <input type="text" placeholder="Enter Email ID" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Password</label>
                <input type="password" placeholder="Enter Password" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="flex my-2 items-center text-gray-400 cursor-pointer">
                <Link to="/register" className="underline underline-offset-4">Don&apos;t have an Account ?</Link>
                <p className="text-red-500 mx-2" >Register</p>
            </div>

            <button className="border border-black border-solid bg-black px-3 py-2 my-2 rounded-lg w-[350px] text-white" onClick={handleSubmit} >Login</button>
        </div>

    </div>
  )
}

export default Login
