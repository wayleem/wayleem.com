import React, { useState } from 'react'
import { httpService } from '../services/httpService'

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      httpService.sendMessage(message)
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
