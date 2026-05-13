const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.uri

// mongoose.connect(uri)
// .then(()=> {
//     console.log(`Connected to mongodb, ThankGod`);
    
// }).catch((err)=> {
//     console.log(`Not Connected because of ${err}`);
    
// })


mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000 // Give up after 5 seconds instead of hanging
})
.then(() => {
    console.log(`Connected to mongodb, ThankGod`);
})
.catch((err) => {
    // This will give us more detail if it fails again
    console.error("MongoDB Connection Error Details:", err.reason || err);
});