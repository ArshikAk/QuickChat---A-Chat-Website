const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

// const app = express()
const {app , server} = require("./socket/socket")


app.use(express.json())
app.use(cors({
    origin: "*",
    credentials : true
}))

mongoose.connect(process.env.MONGO_DB_URL)
.then(() => {
    console.log("Connected to Data Base")
})

app.use("/api/auth",require("./routes/authRoutes"))
app.use("/api/contact",require("./routes/contactRoutes"))
app.use("/api/profile",require("./routes/profileRoutes"))
app.use("/api/messages",require("./routes/messageRoutes"))

server.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})