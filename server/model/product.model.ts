import { Schema, model } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate-v2'

const ProductSchema = new Schema({
  type: { type: String, required: true, unique: true },
  imageId: { type: String },
  imageURL: { type: String },
  client_price: { type: Number },
  shipment: [{ type: Schema.Types.ObjectId, ref: 'Shipment' }],
  sell: [{ type: Schema.Types.ObjectId, ref: 'Sell' }],
  description: [{ _id: false, desc: { type: String } }]
})
ProductSchema.plugin(mongoosePaginate)
export const Product = model('Product', ProductSchema)