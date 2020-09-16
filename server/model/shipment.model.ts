import { Schema, model } from 'mongoose'

const ShipmentSchema = new Schema({
  type: { type: String, required: true },
  qty: { type: Number },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

export const Shipment = model('Shipment', ShipmentSchema)