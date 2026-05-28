import mongoose from "mongoose";
import User from "./userModel.js";

const orgSchema = mongoose.Schema({
    user  :{
        type  : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    name:{
        type:String,
        required :true
    },
    secret : {
        type : String,
        required :true
    }

},{
    timestamps : true
})

const Org = mongoose.model('Org' , orgSchema)

export default Org