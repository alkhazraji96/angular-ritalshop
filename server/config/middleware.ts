import * as dotenv from "dotenv";
dotenv.config();

  export const multerStorage = {
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '_' + Date.now())
    }
  }
  export const imageFilter = function (req, file, cb) {
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