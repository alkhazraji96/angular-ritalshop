import { Request, Response, Express } from 'express'
import * as multer from 'multer';
import * as cloudinary from 'cloudinary';
import { cloudinaryOpts, imageFilter, multerStorage } from '../config/middleware'
import { Product } from 'server/model/product.model';
import { Shipment } from 'server/model/shipment.model';
import { Sell } from 'server/model/sell.model';
import { NetProfit } from 'server/model/profit.model';
import { Expense } from 'server/model/expense.model';
import { Receipt } from 'server/model/receipt.model';

const upload = multer({ storage: multer.diskStorage(multerStorage), fileFilter: imageFilter })
cloudinary.v2.config(cloudinaryOpts)

export function AdminRoute(server: Express): void {
  // post product
  server.route('/api/admin/product').post(upload.single('imageId'), async (req: Request, res: Response) => {
    req.body.product = await JSON.parse(req.body.product)
    const type = await Product.findOne({ type: req.body.product.type })
    if (type) { return res.json({ msg: '!هذه النوع موجود بالفعل' }) }
    if (req.file) {
      let result = await cloudinary.v2.uploader.upload(req.file.path, { folder: 'test' })
      req.body.product.imageId = result.public_id
      req.body.product.imageURL = result.secure_url
    }
    Product.create(req.body.product)
    res.json({ success: true })
  })

  // get all product
  server.route('/api/admin/all-product').get(async (req: Request, res: Response) => {
    const product = await Product.find({})
    res.json(product)
  })

  // post shipment
  server.route('/api/admin/shipment').post(async (req: Request, res: Response) => {
    const product = await Product.findOne({ _id: req.body.typeId })
    req.body.type = product.type
    const shipment = await Shipment.create(req.body)
    product.shipment.push(shipment)
    product.save()
    res.json({ success: true })
  })

  // add Sell
  server.route('/api/admin/sell').post(async (req: Request, res: Response) => {
    const product = await Product.findOne({ _id: req.body.typeId })
    req.body.type = product.type
    const sell = await Sell.create(req.body)
    product.sell.push(sell)
    product.save()
    res.json({ success: true })
  })

  // add net Profit
  server.route('/api/admin/profit').post(async (req: Request, res: Response) => {
    NetProfit.create(req.body)
    res.json({ success: true })
  })

  // add net Expense
  server.route('/api/admin/expense').post(async (req: Request, res: Response) => {
    Expense.create(req.body)
    res.json({ success: true })
  })

  // add net Receipt
  server.route('/api/admin/receipt').post(async (req: Request, res: Response) => {
    Receipt.create(req.body)
    res.json({ success: true })
  })
}