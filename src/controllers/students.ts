import express from 'express'
import conn from '../config/db'

const router = express.Router()

router.get('/', async (req, res, next) => {
  conn.query('SELECT * FROM students', (err: any, rows) => {
    if (err) return new Error(err)

    res.status(200).json(rows)
  })  
})

export default router