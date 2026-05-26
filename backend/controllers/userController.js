import User from "../models/userModel.js"
import asyncHandler from 'express-async-handler'
import generateToken from "../utils/generateToken.js"
import bcrypt from 'bcryptjs'

const createUser =asyncHandler( async(req,res)=>{
    const {name , email ,password}  = req.body
    if(!name || !email || !password){
       res.status(400)
       throw new Error('please enter all fields')
    }

    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exists') 
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password , salt)
    const user = await User.create({name , email , password : hashedPassword})
        if(user){
                generateToken(res , user._id)
                return res.status(200).json({
                    
                    name : user.name, 
                    email : user.email,
                    id : user.id
                })}
})

const loginUser = asyncHandler(async(req,res)=>{
    const {email , password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('please enter all fields')
    }
    const user = await User.findOne({email})
    if(!user){
        res.status(400)
        throw new Error('User does not exist')
    }
    if(await bcrypt.compare(password , user.password)){
        generateToken(res , user._id)
        res.status(200).json({
            name : user.name,
            email : user.email,
            id : user._id
        })
    }else{
        res.status(400)
        throw new Error('password or email incorrect')
    }

})

const logoutUser = asyncHandler(async(req,res)=>{
   res.cookie('jwt' , '' , {
    httpOnly : true,
    expires : new Date(0)
   })
   res.status(200).json({message : 'user logged out'})
})

export {createUser , loginUser ,logoutUser}