const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
const Expenses = require('../models/Expense')
const { db } = require('../models/Expense')
const Users = require('../models/User')
const mongoose = require('mongoose')
router.use(express.json())


router.get('/:id', async(req,res) => {
    const user = await Users.find({_id:mongoose.Types.ObjectId(req.params.id)})
    res.send({
        firstName: user[0].firstName,
        lastName:user[0].lastName,
        expenses:user[0].expenses 
    })
})

//Post expense in the user collections given the userid in req.params
router.post('/:id', async (req,res) => {
    const expense = new Expenses({
        value:req.body.value,
        description:req.body.description
    })
    try{
        const userUpdate = await Users.updateOne({_id:mongoose.Types.ObjectId(req.params.id)},{$push:{expenses:expense}})
        const userExpenses = await Users.find({_id:mongoose.Types.ObjectId(req.params.id)})
        res.json(userExpenses[0].expenses).send
    }catch(err){res.sendStatus(500)}
    
})
//Delete the expense given the userid and expense id
router.delete('/:id',async (req,res)=>{
    try{
        const deletedExpense = await Users.updateOne({_id: mongoose.Types.ObjectId(req.params.id)}, {$pull:{expenses:{_id: mongoose.Types.ObjectId(req.body._id)}}})
        res.json(deletedExpense).send
    }catch(err){res.sendStatus(500)}
    
})

// Update expense given the expense ID
router.patch('/:id', async (req, res) => {
    try{
        const userExpenses = await Users.updateOne({"expenses._id":mongoose.Types.ObjectId(req.body._id)},{$set: {"expenses.$.value":`${req.body.value}`, "expenses.$.description":`${req.body.description}`}} )
        res.json().send
    }catch(err){res.sendStatus(500)}
})

module.exports = router