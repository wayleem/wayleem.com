import { store } from '../store'
import { addMessage } from '../store/chatSlice'

class WebSocketService {
  private socket: WebSocket | null = null

  connect(url: string) {
    this.socket = new WebSocket(url)

    this.socket.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data)
        store.dispatch(
          addMessage({
            id: Date.now().toString(),
            text: message.text,
            user: false,
          })
        )
      } catch (error) {
        console.error('Error parsing WebSocket message:', error)
      }
    }

    this.socket.onopen = () => {
      console.log('WebSocket connected')
    }

    this.socket.onclose = () => {
      console.log('WebSocket connection closed')
    }

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error)
    }
  }

  sendMessage(text: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const message = JSON.stringify({ text })
      this.socket.send(message)
      store.dispatch(
        addMessage({
          id: Date.now().toString(),
          text,
          user: true,
        })
      )
    } else {
      console.error('WebSocket is not connected.')
    }
  }
}

export const webSocketService = new WebSocketService()
