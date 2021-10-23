const mongoose = require('mongoose')

const UsersSchema = mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    password:String
})

module.exports = mongoose.model('Users',UsersSchema)