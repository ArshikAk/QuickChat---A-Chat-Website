const mongoose = require("mongoose")


const conversationSchema = new mongoose.Schema({
    participants : {
        type : Array,
        required : true
    },
    messages : {
        type : Array,
        default : []
    }
})


const conversationModel = new mongoose.model("conversation",conversationSchema)

module.exports = conversationModel