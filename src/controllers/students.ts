import express from 'express'
import conn from '../config/db'

const router = express.Router()

router.get('/', async (req, res, next) => {
  const sql = await 'SELECT * FROM students'

  conn.query(sql, (err: any, rows) => {
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

router.put('/:nim', async (req, res, next) => {
  const params: string = req.params.nim
  const { nama, fakultas, jurusan, umur, kelamin } = req.body
  
  const sql = await `UPDATE students SET
    nama = ?, fakultas = ?, jurusan = ?, umur = ?, kelamin = ?
    WHERE nim = ${params}
  `
  conn.query(sql, [nama, fakultas, jurusan, umur, kelamin], (err: any, rows) => {
    if (err) return new Error(err)

    if (rows.affectedRows == 0) return res.status(401).json({
      status: 'failed',
      message: 'nim does not define any students'
    })

    res.status(200).json({
      status: 'success',
      message: 'successfully changed student data'
    })
  })
})

router.delete('/:nim', async (req, res, next) => {
  const params: string = req.params.nim
  const sql = await `DELETE FROM students WHERE nim = ?`

  conn.query(sql, [params], (err: any, rows) => {
    if (err) return new Error(err)

    if (rows.affectedRows == 0) return res.status(401).json({
      status: 'failed',
      message: 'nim does not define any students'
    })

    res.status(200).json({
      status: 'success',
      message: 'successfully deleted student data'
    })
  })
})

export default router