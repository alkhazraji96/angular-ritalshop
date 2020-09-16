import * as dotenv from "dotenv";
dotenv.config();
import { User } from '../model/user.model';
import { Strategy as localStrategy } from 'passport-local';
import { Strategy as jwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { compare } from 'bcryptjs'

export const registerStrategy = new localStrategy(async (username, password, done) => {
  try {
    username = username.toLocaleLowerCase()
    const user = await User.create({ username: username, password: password })
    user.set('password', undefined)
    done(null, user)
  } catch (err) { return done(null, false) }
})

export const loginStrategy = new localStrategy(async (username: string, password: string, done: any) => {
  try {
    username = username.toLocaleLowerCase()
    const user: any = await User.findOne({ username: username }).select('+password')
    if (!user) { return done(null, false, { msg: 'اسم المستخدم غير موجود' }) }
    const validatePassword = await compare(password, user.password)
    if (!validatePassword) { return done(null, false, { msg: 'رمز المستخدم غير صحيح' }) }
    user.get('password', undefined)
    done(null, user)
  } catch (err) { return done(null, false) }
})

const opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'), secretOrKey: process.env.STRONG_SECRET }

export const secureRoute = new jwtStrategy(opts, (jwt_payload, done) => {
  done(null, jwt_payload.user)
})