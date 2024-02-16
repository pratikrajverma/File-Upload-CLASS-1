const mongoose = require('mongoose');

const fileschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    }



})

module.exports = mongoose.model('Files', fileschema);