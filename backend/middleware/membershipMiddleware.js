import asyncHandler from 'express-async-handler'
import Membership from '../models/memvershipModel.js'

const organizationAccess = asyncHandler(async (req, res, next) => {
    const { orgId } = req.params

    const membership = await Membership.findOne({
        user: req.user._id,
        organization: orgId
    })

    if (!membership) {
        res.status(403)
        throw new Error('Access denied. You are not a member of this organization.')
    }

    req.membership = membership

    next()
})

export default organizationAccess