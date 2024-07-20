import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ChatArea from './components/ChatArea'
import ChatInput from './components/ChatInput'
import { webSocketService } from './services/websocket'

const App: React.FC = () => {
  useEffect(() => {
    webSocketService.connect('ws://127.0.0.1:8080/ws')
  }, [])

  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-bold">Portfolio Chatbot</h1>
        </header>
        <ChatArea />
        <ChatInput />
      </div>
    </Provider>
  )
}

export default App
