import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'

import routes from './routes'
import './database/connection'

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(3334, () =>
  console.log('Server running on port 3334...')
)
