import { Schema, model } from 'mongoose'

const OrderSchema = new Schema({
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  form: {
    name: { type: String },
    city: { type: String },
    address: { type: String },
    tel: { type: Number },
    createdAt: { type: Date, default: Date.now }
  }
})

export const Order = model('Order', OrderSchema)