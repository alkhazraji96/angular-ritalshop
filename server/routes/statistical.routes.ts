import { Request, Response, Express } from 'express'
import { Sell } from '../model/sell.model';
import { NetProfit } from '../model/profit.model';
import { Expense } from '../model/expense.model';
import { Receipt } from '../model/receipt.model';
import * as passport from 'passport';

export function StatisticalRoute(server: Express): void {

  server.get('/api/admin/statistical/sell', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    const sell = await Sell.find({}).sort({ _id: -1 })
    res.json(sell)
  })

  server.get('/api/admin/statistical/expense', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    const expense = await Expense.find({}).sort({ _id: -1 })
    res.json(expense)
  })

  server.get('/api/admin/statistical/receipt', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    const receipt = await Receipt.find({}).sort({ _id: -1 })
    res.json(receipt)
  })

  server.get('/api/admin/statistical/profit', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    const profit = await NetProfit.find({}).sort({ _id: -1 })
    res.json(profit)
  })

}