import mongoose from 'mongoose'

const contextSchema = new mongoose.Schema({
  key: String,
  value: mongoose.Schema.Types.Mixed,
})

const Context = mongoose.model('Context', contextSchema, 'context')

export default Context
