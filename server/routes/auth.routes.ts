import { Request, Response, Express, NextFunction } from 'express'
import { sign } from 'jsonwebtoken';
import * as passport from 'passport';

export function AuthRoute(server: Express): void {

  // server.post('/api/admin/register', async (req: Request, res: Response, next: NextFunction) => {
  //   passport.authenticate('register', { session: false }, (err, user, info) => {
  //     if (!user) { return res.json({ msg: info.msg }) }
  //     const token = sign({ user: user }, process.env.STRONG_SECRET)
  //     res.json({ id_token: token })
  //   })(req, res, next)
  // })

  server.post('/api/admin/login', async (req: Request, res: Response, next: NextFunction) => {
    try {
      passport.authenticate('login', { session: false }, (err, user, info) => {
        if (!user) { return res.json({ msg: info.msg }) }
        const token = sign({ user: user }, process.env.STRONG_SECRET)
        // client alread added to the beginning of token schema 'JWT token ... '
        res.json({ id_token: token })
      })(req, res, next)
    } catch (e) { return res.json({ msg: 'فشل تسجيل الدخول' }) }
  })

}