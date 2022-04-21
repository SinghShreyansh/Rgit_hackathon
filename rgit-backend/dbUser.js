const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username:String,
    email:String,
    mobile: String,
    password: String,
});


module.exports= mongoose.model('UserContents', UserSchema);