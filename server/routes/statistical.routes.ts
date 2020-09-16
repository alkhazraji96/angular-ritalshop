import { Request, Response, Express } from 'express'

import { Sell } from '../model/sell.model';
import { NetProfit } from '../model/profit.model';
import { Expense } from '../model/expense.model';
import { Receipt } from '../model/receipt.model';

export function StatisticalRoute(server: Express): void {
  server.route('/api/admin/statistical/sell').get(async (req: Request, res: Response) => {
    const sell = await Sell.find({}).sort({ _id: -1 })
    res.json(sell)
  })

  server.route('/api/admin/statistical/expense').get(async (req: Request, res: Response) => {
    const expense = await Expense.find({}).sort({ _id: -1 })
    res.json(expense)
  })

  server.route('/api/admin/statistical/receipt').get(async (req: Request, res: Response) => {
    const receipt = await Receipt.find({}).sort({ _id: -1 })
    res.json(receipt)
  })

  server.route('/api/admin/statistical/profit').get(async (req: Request, res: Response) => {
    const profit = await NetProfit.find({}).sort({ _id: -1 })
    res.json(profit)
  })
}