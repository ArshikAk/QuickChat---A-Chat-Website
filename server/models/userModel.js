const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profilePic : {
        type : String,
        default : "https://res.cloudinary.com/dfxnf7to6/image/upload/v1731504799/personLogo_vmp1kv.jpg"
    }
})

const userModel = mongoose.model("userdata",userSchema)

module.exports = userModel