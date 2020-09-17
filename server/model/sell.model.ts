import { Schema, model } from 'mongoose'

const SellSchema = new Schema({
  type: { type: String, required: true },
  qty: { type: Number },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

export const Sell = model('Sell', SellSchema)