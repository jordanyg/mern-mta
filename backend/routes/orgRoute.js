import express from 'express'
import { createOrg ,getOrgs ,joinOrg } from '../controllers/orgController.js'

const router = express.Router()

router.post('/create' , createOrg)
router.get('/' , getOrgs)
router.post('/join' ,joinOrg)

export default router