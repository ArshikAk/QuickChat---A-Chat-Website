const express = require("express")
const router = express.Router()


const {getProfileData , updateProfileData} = require("../controllers/profileController")
const authMiddleware = require("../middleware/authMiddleware")


router.get("/getProfileData",authMiddleware,getProfileData)
router.put("/updateProfileData",authMiddleware,updateProfileData)

module.exports = router