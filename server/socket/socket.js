const http = require("http")
const express = require("express")
const {Server} = require("socket.io")


const app = express()
const server = http.createServer(app)

const io = new Server(server , {
    cors : {
        origin : "*",
        methods : ["GET","POST"]
    }
})

const userSocketIdMap = {}

const getReceiverSocketId = (receiverId) => {
    return userSocketIdMap[receiverId]
}

io.on("connection",(socket) => {

    const userId = socket.handshake.query.userId

    if(userId != "undefined")
    {
        userSocketIdMap[userId] = socket.id
    }

    socket.emit("onlineUsers",Object.keys(userSocketIdMap))

    socket.on("disconnect",() => {
        delete userSocketIdMap[userId]
        socket.emit("onlineUsers",Object.keys(userSocketIdMap))
    })
})

module.exports = {app,server,io,getReceiverSocketId}