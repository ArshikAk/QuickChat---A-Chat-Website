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


io.on("connection",(socket) => {
    console.log("a user connected");

    socket.on("disconnect",() => {
        console.log("a user disconnected");
    })
})

module.exports = {app,server,io}