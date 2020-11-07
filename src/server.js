import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import routes from './routes'
import './database/connection'

const app = express()

app.use(cors())

app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(routes)

if ('development' === app.get('env')) {
  app.use(express.errorHandler())
}

dotenv.config()

app.listen(3334, () =>
  console.log('Server running on port 3334...')
)
