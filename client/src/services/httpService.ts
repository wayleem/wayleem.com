import axios from 'axios'
import { store } from '../store'
import { addMessage } from '../store/chatSlice'

class HttpService {
  private baseUrl: string = 'http://localhost:8080' // Update this to match your server address

  async sendMessage(text: string) {
    try {
      const response = await axios.post(`${this.baseUrl}/chat`, {
        message: text,
      })

      store.dispatch(
        addMessage({
          id: Date.now().toString(),
          text: text,
          user: true,
        })
      )

      store.dispatch(
        addMessage({
          id: (Date.now() + 1).toString(),
          text: response.data.response,
          user: false,
        })
      )
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }
}

export const httpService = new HttpService()
