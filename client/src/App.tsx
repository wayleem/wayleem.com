import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ChatArea from './components/ChatArea'
import ChatInput from './components/ChatInput'

const App: React.FC = () => {
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
