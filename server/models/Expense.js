const mongoose = require('mongoose')

const ExpensesSchema = mongoose.Schema({
    value:Number,
    description:String,
    userId:String
})

module.exports = mongoose.model('Expenses',ExpensesSchema)