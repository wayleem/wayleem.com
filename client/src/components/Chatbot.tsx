import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { sendMessage, addMessage } from '../store/chatSlice'

const ChatBot: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { messages, status, error } = useSelector(
    (state: RootState) => state.chat
  )
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<null | HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    dispatch(
      addMessage({
        id: Date.now().toString(),
        text: input,
        sender: 'user',
      })
    )

    setInput('')
    await dispatch(sendMessage(input))
  }

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 border border-gray-300'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {status === 'loading' && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">
              Thinking...
            </div>
          </div>
        )}
        {status === 'failed' && (
          <div className="flex justify-start">
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg">
              {error}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 border-t border-gray-200"
      >
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatBot
