const express = require("express")
const router = express.Router()

const {getContacts} = require("../controllers/contactController")

router.get("/getContacts",getContacts)

module.exports = router