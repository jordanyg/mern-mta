import Org from "../models/orgModel.js";
import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler'
import bcrypt from "bcryptjs";
import Membership from "../models/memvershipModel.js";



const createOrg = asyncHandler(async(req,res)=>{
    const {name , secret} = req.body
    if(!name || !secret){
        res.status(400)
        throw new Error('please add all fields')
    }
    const orgExists = await Org.findOne({name})

    if(orgExists){
        res.status(400)
        throw new Error('organization already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedSecret = await bcrypt.hash(secret , salt)
    const loggedInUser = req.user
    const organization = await Org.create({
        name , 
        secret:hashedSecret,
        user : req.user.id
    })

    if(organization){
        res.status(201).json({
            organizationName : organization.name,
            userName : loggedInUser.name,
        })
    }
    if(!organization){
        res.status(400)
        throw new Error('it did not create')
    }
}
)
const getOrgs = async(req,res)=>{
    const organizations = await Membership.find({user : req.user.id})
    if(organizations){
        res.status(200).json(organizations)
    }else{
        res.status(400)
        throw new Error('no organizations found')
    }
}

const joinOrg = async(req,res)=>{
    const {secret , name} = req.body
    if(!secret || !name){
        res.status(400)
        throw new Error('please enter fields')
    }
    const organization = await Org.findOne({name})
    const exists = await Membership.findOne({
        user  : req.user.id,
        organization  : organization._id
    })
    if(exists){
        res.status(400)
        throw new Error('already joined')
    }
    
    if(organization && await bcrypt.compare(secret , organization.secret)){
        await Membership.create({
            user : req.user.id, 
            organization : organization.id
        })

        res.status(200).json({
            message : `successfully joined ${organization.name}`
        })
    }else{
        res.status(400)
        throw new Error('secret or name incorrect')
    }
}

export {createOrg , getOrgs ,joinOrg}