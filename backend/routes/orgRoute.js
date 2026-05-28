import express from 'express'
import { createOrg ,getOrgs ,joinOrg } from '../controllers/orgController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/create' ,protect, createOrg)
router.get('/',protect , getOrgs)
router.post('/join',protect ,joinOrg)

export default router