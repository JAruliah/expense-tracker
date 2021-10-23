const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
const { get } = require('mongoose')
const bcrypt = require('bcryptjs')
const Users = require('../models/User')

router.use(express.json())

//ROUTES

//Register
router.post('/',  async (req,res) => {
    try{
        //Hash password
        const salt =  await bcrypt.genSalt()
        const hashedPassword =  await bcrypt.hash(req.body.password, salt)
        //Create new user
        const user =  new Users(
            {
                email:req.body.email, 
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                password:hashedPassword
            }
        )
        //Save new user into database
        const savedUser = await user.save()
        res.sendStatus(201)
    }catch(err){
        res.sendStatus(500)
    }

})

//Login
router.post('/login', async (req,res) => {
    const user = await Users.find({email: req.body.email,})
    //If user doesnt exist
    if (user == null) {
        return res.sendStatus(400)
    }
    //Compare passwords
    try {
      if (await bcrypt.compare(req.body.password,user[0].password)){
          res.send('Success')
      }else{
          res.send('Not Allowed')
      }
    } catch (err) {
        res.sendStatus(500)
    }
})



module.exports = router