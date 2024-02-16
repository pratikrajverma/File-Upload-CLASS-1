 
const mongoose = require('mongoose');

require('dotenv').config();

const connetDB = () =>{
    mongoose.connect(process.env.MongoDB_URL)
    .then(()=>{
         console.log('DB Connected')
    })
    .catch((error)=>{
         console.log('DB not connected')
         console.error(error)
         process.exit(1)
    })
}

module.exports = connetDB;