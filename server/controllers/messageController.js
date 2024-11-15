const conversationModel = require("../models/conversationModel")
const {getReceiverSocketId , io} = require("../socket/socket")

exports.getMessages = async (req,res) => {

    try{
        const receiverId = req.params.receiverId
        const senderId = req.user._id

        conversationModel.findOne({participants : {$all : [senderId , receiverId]}})
        .then((result) => {
            result ? res.status(200).json(result.messages) : res.status(200).json(result)
        })
        .catch((err) => {
            res.status(500).json({message : "Error fetching messages" , error : `Promise Error ${err}`})
        })
    }
    catch (error) {
        res.status(500).json({message : "Error fetching messages" , error : error})
    }
}

exports.sendMessage = async (req,res) => {

    const {receiverId , message} = req.body
    const senderId = req.user._id

    const receiverSocketId = getReceiverSocketId(receiverId)

    conversationModel.findOne({participants : {$all : [senderId , receiverId]}})
    .then((result => {
        if(result)
        {
            const newMessage = {
                senderId : senderId,
                receiverId : receiverId,
                message : message
            }
            result.messages.push(newMessage)
            result.save()
            res.status(200).json("Message sent successfully")
        }
        else
        {
            const newConversation = new conversationModel({
                participants : [senderId , receiverId],
                messages : [{
                    senderId : senderId,
                    receiverId : receiverId,
                    message : message
                    }]
            })
            newConversation.save()
            res.status(200).json("Message sent successfully")
        }

        let data = {
            senderId : senderId,
            message : message,
        }

        io.to(receiverSocketId).emit("newMessage",data)
    }))
    .catch((err) => {
        res.status(500).json({message : "Error sending messages" , error : err})
    })
}