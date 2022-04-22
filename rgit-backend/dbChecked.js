const mongoose = require('mongoose')

const CheckedSchema = mongoose.Schema({
    title: String,
    sendername: String,
    senderemail:String,
    senderrole: String,
    receiverrole: String,
    complain: String, 
    replymsg:String
});


module.exports= mongoose.model('CheckedContents', CheckedSchema);