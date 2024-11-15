const express = require("express")
const router = express.Router()

const {getMessages,sendMessage} = require("../controllers/messageController")
const authMiddleware = require("../middleware/authMiddleware")


router.get("/getMessages/:receiverId",authMiddleware,getMessages)
router.post("/sendMessage",authMiddleware,sendMessage)


module.exports = router