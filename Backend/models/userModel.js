const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    pasword:{
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',userSchema)