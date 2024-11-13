import { useState } from "react"
import { useNavigate , Link } from "react-router-dom"
import axios from "axios"


const Register = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [profilePic , setProfilePic] = useState(null)
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {

        if(password != confirmPassword)
        {
            alert("password mismatch")
            return;
        }
        console.log(name,email,profilePic,password)

        axios.post("http://localhost:8000/api/auth/register",{name , email , profilePic , password})
        .then((result) => {
            if(result.data == "Success")
            {
                navigate("/login")
            }
        })
    }

    const handleImageChange = async (e) => {

        const file = e.target.files[0];
    
        const formData = new FormData()

        formData.append("file",file)
        formData.append("upload_preset","unsigned_upload")
    
        const response = await axios.post(`https://api.cloudinary.com/v1_1/dfxnf7to6/image/upload`,formData);
        console.log(response)
  
        setProfilePic(response.data.secure_url);
    };


  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
        
        <div className="p-10 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            
            <h1 className="text-3xl text-white text-center">REGISTER <span className="text-2xl text-blue-500">QuickChat</span></h1>


            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Name</label>
                <input type="text" placeholder="Enter Name" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Profile Pic</label>
                <input type="file" placeholder="Enter Email ID" className=" text-white px-3 py-1 my-2 rounded-lg w-[350px]" onChange={(e) => handleImageChange(e)}/>
            </div>

            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Email</label>
                <input type="text" placeholder="Enter Email ID" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setEmail(e.target.value)} />
            </div>


            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Password</label>
                <input type="password" placeholder="Enter Password" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="flex flex-col my-2">
                <label className="text-gray-300 my-1 text-xl font-semibold">Confirm Password</label>
                <input type="password" placeholder="Re-enter Password" className="border border-black border-solid bg-black px-3 py-1 my-2 rounded-lg w-[350px] text-white" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <div className="flex my-2 items-center text-white cursor-pointer">
                <Link to="/login" className="underline underline-offset-4">Already have an Account?</Link>
                <p className="text-red-500 mx-2" >Login</p>
            </div>

            <button className="border border-black border-solid bg-black px-3 py-2 my-2 rounded-lg w-[350px] text-white" onClick={() => handleSubmit()} >Register</button>
        </div>

    </div>
  )
}

export default Register
