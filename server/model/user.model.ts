import { Schema, model } from 'mongoose'
import { NextFunction } from 'express'
import { hash } from 'bcryptjs'

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }
})

UserSchema.pre('save', async function (next: NextFunction) {
  try {
    this.set('password', await hash(this.get('password'), 10))
    return next()
  } catch (err) { return }
})

export const User = model('User', UserSchema)