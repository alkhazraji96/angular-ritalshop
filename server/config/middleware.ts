import * as dotenv from "dotenv";
dotenv.config();

export const multerStorage = {
  filename: function (req: any, file: any, cb: any) {
    cb(null, file.fieldname + '_' + Date.now())
  }
}

export const imageFilter = function (req: any, file: any, cb: any) {
  // accept image files only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
}

export const cloudinaryOpts = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
}