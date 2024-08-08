import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ChatBot from './components/Chatbot'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>William Huang's Portfolio Chatbot</h1>
        </header>
        <main>
          <ChatBot />
        </main>
      </div>
    </Provider>
  )
}

export default App
