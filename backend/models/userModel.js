import mongoose from "mongoose";
import { timeStamp } from "node:console";
import { type } from "node:os";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true , 
    },
    password: { 
        type : String , 
        required : true
    }
}, {timeStamp : true})

const User = mongoose.model('User' , userSchema)

export default User