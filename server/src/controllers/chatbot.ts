import { Request, Response } from 'express'
import { processUserMessage } from '../services/chatbot'
import Context from '../models/context'
import Intent from '../models/intents'

export const handleChatbotRequest = async (req: Request, res: Response) => {
  const { message } = req.body

  try {
    const contextInfo = await Context.findOne()
    const intentsDoc = await Intent.findOne()

    if (!contextInfo || !intentsDoc || !intentsDoc.intents) {
      return res.status(500).send('Context or intents data is missing.')
    }

    const responseMessage = await processUserMessage(
      message,
      contextInfo,
      intentsDoc.intents
    )

    res.json({
      response: responseMessage.response,
      pageFlag: responseMessage.pageFlag,
    })
  } catch (error) {
    console.error('Error handling chatbot request:', error)
    res.status(500).send('Internal Server Error')
  }
}
