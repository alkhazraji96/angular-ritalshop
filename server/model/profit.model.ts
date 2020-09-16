import { Schema, model } from 'mongoose'

const NetProfitSchema = new Schema({
  details: { type: String },
  price: { type: Number },
  qty: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

export const NetProfit = model('NetProfit', NetProfitSchema)
