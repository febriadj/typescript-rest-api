import express from 'express'
import conn from '../config/db'

const router = express.Router()

router.get('/', async (req, res, next) => {
  const sql = await 'SELECT * FROM students'

  conn.query(sql, (err: any, rows: any) => {
    if (err) return new Error(err)

    res.status(200).json(rows)
  })  
})

router.post('/', async (req, res, next) => {
  const { nama, fakultas, jurusan, umur, kelamin } = req.body
  
  const sql = await `INSERT INTO students VALUES (
    0, '${nama}', '${fakultas}', '${jurusan}', '${umur}', '${kelamin}'
  )`

  conn.query(sql, (err: any, rows) => {
    if (err) return new Error(err)
    
    res.status(200).json({
      status: 'success',
      message: 'successfully added student data'
    })
  })
})

export default router