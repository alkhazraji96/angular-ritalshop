import { Schema, model } from 'mongoose'

const ReceiptSchema = new Schema({
  receipt: { type: String, required: true },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

export const Receipt = model('Receipt', ReceiptSchema)