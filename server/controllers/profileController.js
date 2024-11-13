const userModel = require("../models/userModel")


exports.getProfileData = async (req,res) => {

    userModel.findOne({email : req.user.email})
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(err)
    })

}


exports.updateProfileData = async (req,res) => {

    const {name} = req.body

    userModel.updateOne({email : req.user.email},{name : name})
    .then((result) => {
        res.status(200).json("Success")
    })
    .catch((err) => {
        console.log(err)
    })

}