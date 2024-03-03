const mongoose = require('mongoose')

const SchemeSchema = new mongoose.Schema({
    schemeName:{
        type:String,
        required:true,
        unique:true,
    },
    State:{
        type:String,
        required:true,
    },
    briefDescription:{
        type:String,
    },
    eligibilityCriteria:{
        type:String,
    },
    tags:{
        type:Array,
    },
})

module.exports = mongoose.model('Scheme',SchemeSchema)