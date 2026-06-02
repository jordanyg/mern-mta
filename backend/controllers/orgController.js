import Org from "../models/orgModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import Membership from "../models/memvershipModel.js";
import { asyncWrapProviders } from "node:async_hooks";

const createOrg = asyncHandler(async (req, res) => {
    const { name, secret } = req.body;

    if (!name || !secret) {
        res.status(400);
        throw new Error("please add all fields");
    }

    const orgExists = await Org.findOne({ name });

    if (orgExists) {
        res.status(400);
        throw new Error("organization already exists");
    }

    const hashedSecret = await bcrypt.hash(secret, 10);

    const organization = await Org.create({
        name,
        secret: hashedSecret,
        user: req.user.id,
    });

    await Membership.create({
        user: req.user.id,
        organization: organization._id,
        membership: "owner",
    });

    res.status(201).json({
        organizationName: organization.name,
        userName: req.user.name,
    });
});

const getOrgs = asyncHandler(async (req, res) => {
    const organizations = await Membership.find({
        user: req.user.id,
    }).populate("organization" , "-secret");

    res.status(200).json(organizations);
});

const joinOrg = asyncHandler(async (req, res) => {
    const { secret, name } = req.body;

    if (!secret || !name) {
        res.status(400);
        throw new Error("please enter fields");
    }

    const organization = await Org.findOne({ name });

    if (!organization) {
        res.status(404);
        throw new Error("organization not found");
    }

    const exists = await Membership.findOne({
        user: req.user.id,
        organization: organization._id,
    });

    if (exists) {
        res.status(400);
        throw new Error("already joined");
    }

    const validSecret = await bcrypt.compare(
        secret,
        organization.secret
    );

    if (!validSecret) {
        res.status(400);
        throw new Error("secret incorrect");
    }

    await Membership.create({
        user: req.user.id,
        organization: organization._id,
    });

    res.status(200).json({
        message: `successfully joined ${organization.name}`,
    });
});
const getOrgMembers = asyncHandler(async(req,res)=>{

    const membership = await Membership.findOne({
        user : req.user._id,
        organization : req.params.orgId
        })

    if(!membership){
        res.status(401)
        throw new Error('not a member of this organization')
    }
    const members = await Membership.find({
        organization : req.params.orgId
    }).populate('user','name email')
    res.status(200).json(members)
})



export { createOrg, getOrgs, joinOrg,getOrgMembers };