const express = require('express')
const PORT = 3001
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()






//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>{
    console.log('Connected to DB!')
})


app.listen(PORT, console.log(`Listening on port ${PORT}`))