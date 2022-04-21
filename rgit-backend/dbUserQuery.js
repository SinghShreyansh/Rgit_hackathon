const mongoose = require('mongoose')

const UserQuerySchema = mongoose.Schema({
    title: String,
    sendername: String,
    senderemail:String,
    senderrole: String,
    receiverrole: String,
    complain: String,    
});


module.exports= mongoose.model('UserQuery', UserQuerySchema);