import express, { Router } from 'express'
import { createUserRouter, createPostRouter } from './routes/index.ts'
import { PORT } from './config.ts'

const app = express()

app.use(express.json())

app.use('/api/users', createUserRouter(Router))
app.use('/api/posts', createPostRouter(Router))

app.listen(PORT, () => {
  console.log(`Mock Server running at http://localhost:${PORT}`)
})
