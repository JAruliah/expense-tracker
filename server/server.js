const express = require('express')
const PORT = 3001
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const Expenses = require('./models/Expense')
const { json } = require('body-parser')

//GET ROUTES
const userRouter = require('./routes/users')
app.use('/users',userRouter)

//MIDDLEWARES
app.use(express.json())

//ROUTES

//Get all expenses from database
app.get('/', async (req,res) => {
    try {

        const expenses = await Expenses.find()
        res.send(expenses)
        
    } catch (error) {
        res.sendStatus(500)
    }
})
//Post expense to database
app.post('/', async (req,res) => {
    const expense = new Expenses({
        value:req.body.value,
        description:req.body.description
    })
    try{
        const savedExpense = await expense.save()
        res.json(savedExpense)
    }catch(err){res.sendStatus(500)}
    
})
//Delete an expense from the database
app.delete('/:id',async (req,res)=>{
    try{
        const deletedExpense = await Expenses.deleteOne({_id: req.params.id})
        res.json(deletedExpense)
    }catch(err){res.sendStatus(500)}
    
})


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Connected to DB!')
})

//Server is listening
app.listen(PORT, console.log(`Listening on port ${PORT}`))