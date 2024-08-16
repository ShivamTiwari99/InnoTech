const { type } = require("jquery");
const mongoose = require("mongoose");

const vaildator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        minLength:3
    },
    email:{
        type: String,
        required : true,
        vaildator(value){
            if(!vaildator.isEmail(value)){
                throw new Error("Invalid email ID")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
    },
    massage:{
        type:String,
        required:true,
        minLength:10,
    }
})

// we need a collection

const User = mongoose.model("User",userSchema);
module.exports = User;











