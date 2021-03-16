import express from 'express'
import students from '../controllers/students'

const router = express.Router()

// routes students
router.use('/students', students)

export default router