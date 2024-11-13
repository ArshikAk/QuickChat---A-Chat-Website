const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.registerUser = async (req,res) => {

    const {name , email , profilePic , password} = req.body

    console.log(name , email , profilePic , password)

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    userModel.findOne({email : email})
    .then((result) => {
        if(result) 
        {
            res.status(400).json("User already Exists")
            return
        }
    })
    .catch((err) => {
        console.log(err)
    })

    const user = new userModel({
        name : name,
        email : email,
        profilePic : profilePic,
        password : hashedPassword
    })

    await user.save()

    res.status(201).json("Success")
}


exports.loginUser = async (req,res) => {

    const {email , password} = req.body

    userModel.findOne({email : email})
    .then((result) => {
        if(result)
        {
            const isValidPassword = bcrypt.compareSync(password,result.password)

            if(isValidPassword)
            {
                let payload = {
                    user : result
                }
                let token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn : "2d"})
                res.status(200).json({
                    token : token,
                    message : "Success"
                })
            }
            else
            {
                res.status(400).json("Invalid Password")
            }
        }
        else{
            res.status(400).json("User Not Found")
        }
    })
    .catch((err) => {
        console.log(err)
    })
}