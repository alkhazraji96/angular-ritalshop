import { Schema, model } from 'mongoose'

const ExpenseSchema = new Schema({
  details: { type: String },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now }
})

export const Expense = model('Expense', ExpenseSchema)