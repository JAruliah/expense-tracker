const mongoose = require('mongoose')
const Expenses = require('../models/Expense')

const UsersSchema = mongoose.Schema({
    email:String,
    firstName:String,
    lastName:String,
    password:String,
    expenses:[]

})

module.exports = mongoose.model('Users',UsersSchema)