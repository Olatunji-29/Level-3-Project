const mongoose = require('mongoose')
const {Schema, model} = mongoose

const userSchema = new Schema({
   name: {type: String, required: true,},
   email: {type: String, required: true, unique:true},
   password: {type: String, required: true,}

})

const userModel = new mongoose.model('Jambites', userSchema)
module.exports = userModel