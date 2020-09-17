import * as dotenv from "dotenv";
dotenv.config();

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
import * as passport from 'passport';

const upload = multer({ storage: multer.diskStorage(multerStorage), fileFilter: imageFilter })
cloudinary.v2.config(cloudinaryOpts)

export function AdminRoute(server: Express): void {
  // post product
  server.post('/api/admin/product', passport.authenticate('jwt', { session: false }), upload.single('imageId'), async (req: Request, res: Response) => {
    try {
      req.body.product = await JSON.parse(req.body.product)
      const type = await Product.findOne({ type: req.body.product.type })
      if (type) { return res.json({ msg: '!هذه النوع موجود بالفعل' }) }
      if (req.file) {
        let result = await cloudinary.v2.uploader.upload(req.file.path, { folder: process.env.PRODUCTDIRECTORY })
        req.body.product.imageId = result.public_id
        req.body.product.imageURL = result.secure_url
      }
      Product.create(req.body.product)
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })

  // get all product
  server.get('/api/admin/all-product', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      const product = await Product.find({})
      res.json(product)
    } catch (e) { return res.json({ err: true }) }
  })

  // post shipment
  server.post('/api/admin/shipment', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      const product = await Product.findOne({ _id: req.body.typeId })
      req.body.type = product.type
      const shipment = await Shipment.create(req.body)
      product.shipment.push(shipment)
      product.save()
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })

  // add Sell
  server.post('/api/admin/sell', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      const product = await Product.findOne({ _id: req.body.typeId })
      req.body.type = product.type
      const sell = await Sell.create(req.body)
      product.sell.push(sell)
      product.save()
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })

  // add net Profit
  server.post('/api/admin/profit', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      NetProfit.create(req.body)
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })

  // add net Expense
  server.post('/api/admin/expense', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      Expense.create(req.body)
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })

  // add net Receipt
  server.post('/api/admin/receipt', passport.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
    try {
      Receipt.create(req.body)
      res.json({ success: true })
    } catch (e) { return res.json({ success: false }) }
  })
}