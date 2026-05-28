import mongoose, { mongo } from "mongoose";
import User from "./userModel.js";
import Org from "./orgModel.js";

const membershipSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    organization : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Org', 
        required  :true
    },
    membership : {
        type : String,
        enum : ['owner' , 'member'],
        default : 'member'
    }
},{timestamps: true})

const Membership = mongoose.model('Membership' , membershipSchema)

export default Membership