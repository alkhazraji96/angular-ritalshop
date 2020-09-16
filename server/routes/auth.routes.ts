import { Request, Response, Express, NextFunction } from 'express'
import { sign } from 'jsonwebtoken';
import * as passport from 'passport';

export function AuthRoute(server: Express): void {
  server.route('/api/admin/register').post(async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('register', { session: false }, (err, user, info) => {
      if (!user) { return res.json({ msg: info.msg }) }
      const token = sign({ user: user }, process.env.STRONG_SECRET)
      res.json({ id_token: token })
    })(req, res, next)
  })
  server.route('/api/admin/login').post(async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('login', { session: false }, (err, user, info) => {
      if (!user) { return res.send({ msg: info.msg }) }
      const token = sign({ user: user }, process.env.STRONG_SECRET)
      // client alread added to the beginning of token schema 'JWT token ... '
      res.json({ id_token: token })
    })(req, res, next)
  })

}