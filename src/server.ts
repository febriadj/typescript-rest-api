import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import routes from './routes/index'

const app: any = express()
const port: number = 3000

// config .env file
dotenv.config({ path: './.env' })

// set middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(port, (err: any) => {
  if (err) return new Error(err)
  console.log('server running on port ' + port)
})