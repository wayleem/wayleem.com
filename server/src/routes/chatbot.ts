import { Router } from 'express'
import { handleChatbotRequest } from '../controllers/chatbot'

const router = Router()

router.post('/chatbot', handleChatbotRequest)

export default router
