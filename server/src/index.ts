import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db'
import chatbotRoutes from './routes/chatbot'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use('/api', chatbotRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
