
const mongose = require("mongoose");
const userScema = new mongose.Schema({
    First_Name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    Last_Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["User","admin"],
        default:"User"
    },

})

module.exports = mongose.model("all_user",userScema);
