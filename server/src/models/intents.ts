import mongoose from 'mongoose'

const intentSchema = new mongoose.Schema({
  intents: [
    {
      intent: String,
      phrases: [String],
      response: String,
    },
  ],
})

const Intent = mongoose.model('Intent', intentSchema, 'intents')

export default Intent
