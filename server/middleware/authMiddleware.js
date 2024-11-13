const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const authMiddleware = async (req,res,next) => {
    // console.log(req.headers.authorization.split(" ")[1])
    const token = req.headers.authorization.split(" ")[1]

    if(!token) 
        return res.status(401).json("No token provided")

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = authMiddleware;