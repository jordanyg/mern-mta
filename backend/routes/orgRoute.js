import express from 'express'
import { createOrg ,getOrgs ,joinOrg , getOrgMembers} from '../controllers/orgController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/create' ,protect, createOrg)
router.get('/',protect , getOrgs)
router.post('/join',protect ,joinOrg)
router.get('/:orgId/members', protect ,getOrgMembers)

export default router