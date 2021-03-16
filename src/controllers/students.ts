import express from 'express'
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'hello world'
  })
})

export default router