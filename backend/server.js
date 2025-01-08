import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'

dotenv.config()

const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
