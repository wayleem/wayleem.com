import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import.meta.env.API_URL

const API_URL = import.meta.env.API_URL || 'http://localhost:5000/api'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
}

interface ChatState {
  messages: Message[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ChatState = {
  messages: [],
  status: 'idle',
  error: null,
}

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async (message: string) => {
    const response = await axios.post(`${API_URL}/chatbot`, { message })
    return response.data.response
  }
)

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.messages.push({
          id: Date.now().toString(),
          text: action.payload,
          sender: 'bot',
        })
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer
