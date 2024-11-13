const userModel = require("../models/userModel")


exports.getContacts = async (req,res) => {

    userModel.find()
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
        console.log(err)
    })

}