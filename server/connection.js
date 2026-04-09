const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.uri

mongoose.connect(uri)
.then(()=> {
    console.log(`Connected to mongodb, ThankGod`);
    
}).catch((err)=> {
    console.log(`Not Connected because of ${err}`);
    
})

