import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

async function processUserMessage(
  message: string,
  contextInfo: any,
  intents: any[]
) {
  const prompt = generatePrompt(message, contextInfo, intents)

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            "You are pretending to be William Huang. Your goal is to provide concise and relevant information about William Huang's portfolio to professional employers. Focus on answering the specific questions asked. If the question is broad, guide the user to ask for specific details such as projects, skills, or experiences. For broad queries, give a brief overview and suggest asking for specific details if needed.",
        },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-4o-mini',
      max_tokens: 200, // Adjust as needed
      temperature: 0.5, // Lower temperature for more focused responses
    })

    const responseMessage =
      completion.choices[0]?.message?.content.trim() || 'No response generated.'

    const pageFlag = determinePageFlag(message, contextInfo)

    return {
      response: responseMessage,
      pageFlag: pageFlag,
    }
  } catch (error) {
    console.error('Error processing user message:', error)
    throw new Error('Failed to process user message')
  }
}

function generatePrompt(message: string, contextInfo: any, intents: any[]) {
  if (!contextInfo) {
    throw new Error('Context information is missing.')
  }

  if (!Array.isArray(intents)) {
    throw new Error('Intents must be an array.')
  }

  const matchedIntent = intents.find((intent: any) =>
    intent.phrases.some((phrase: string) =>
      message.toLowerCase().includes(phrase.toLowerCase())
    )
  )

  if (matchedIntent) {
    return `User message: "${message}"\nContext: ${JSON.stringify(
      contextInfo
    )}\nResponse based on intent '${matchedIntent.intent}': ${
      matchedIntent.response
    }`
  }

  return `User message: "${message}"\nContext: ${JSON.stringify(
    contextInfo
  )}\nResponse: Sorry, I can only answer questions related to my portfolio. Please ask something specific about my professional background.`
}

function determinePageFlag(message: string, contextInfo: any): string {
  const lowerCaseMessage = message.toLowerCase()

  let scores = {
    about: 0,
    skills: 0,
    projects: 0,
    contact: 0,
  }

  const keywords = {
    about: ['about', 'background', 'info'],
    skills: ['skills', 'proficiencies', 'expertise'],
    projects: ['projects', 'work', 'portfolio'],
    contact: ['contact', 'reach', 'get in touch'],
  }

  for (const [page, words] of Object.entries(keywords)) {
    words.forEach((word) => {
      if (lowerCaseMessage.includes(word)) {
        scores[page] += 1
      }
    })
  }

  if (contextInfo.skills) {
    contextInfo.skills.forEach((skill: string) => {
      if (lowerCaseMessage.includes(skill.toLowerCase())) {
        scores.skills += 2
      }
    })
  }

  if (contextInfo.projects) {
    contextInfo.projects.forEach((project: string) => {
      if (lowerCaseMessage.includes(project.toLowerCase())) {
        scores.projects += 2
      }
    })
  }

  const highestScorePage = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  )

  return highestScorePage
}

export { processUserMessage }
