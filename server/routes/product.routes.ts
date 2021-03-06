import { Request, Response, Express } from 'express'
import { Product } from '../model/product.model'
import { Order } from '../model/orders.model'

export function ProductRoute(server: Express): void {

  server.get('/api/product', async (req: Request, res: Response) => {
    const product = await Product.paginate({}, { limit: 9, page: Number(req.query.page), select: '-shipment -sell -imageId', sort: { _id: -1 } })
    res.json(product)
  })

  server.get('/api/product/:id', async (req: Request, res: Response) => {
    try {
      const product = await Product.findOne({ _id: req.params.id }).select('-shipment -sell -imageId')
      res.json(product)
    } catch (e) { return res.json({ err: true }) }
  })

  server.post('/api/orders', (req: Request, res: Response) => {
    try {
      Order.create(req.body)
      res.json({ success: true })
    } catch (err) { return res.json({ success: false }) }
  })

}