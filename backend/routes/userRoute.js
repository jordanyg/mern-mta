import { createUser ,loginUser ,logoutUser } from "../controllers/userController.js";
import express from 'express'
import protect from "../middleware/authMiddleware.js";
const router = express.Router()

router.post('/register' , createUser)
router.post('/login' , loginUser)
router.post('/logout' ,protect , logoutUser)

export default router