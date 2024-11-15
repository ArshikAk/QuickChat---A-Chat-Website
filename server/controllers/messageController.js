const conversationModel = require("../models/conversationModel")


exports.getMessages = async (req,res) => {

    const receiverId = req.params.receiverId
    const senderId = req.user._id

    conversationModel.findOne({participants : {$all : [senderId , receiverId]}})
    .then((result) => {
        res.status(200).json(result.messages)
    })
    .catch((err) => {
        res.status(500).json({message : "Error fetching messages" , error : err})
    })
}

exports.sendMessage = async (req,res) => {

    const {receiverId , message} = req.body
    const senderId = req.user._id

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
    }))
    .catch((err) => {
        res.status(500).json({message : "Error sending messages" , error : err})
    })
}