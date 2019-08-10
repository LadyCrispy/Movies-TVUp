require("dotenv").config()
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'Movies_posters',
  allowedFormats: ['jpg', 'png'],
  filename: function (req, res, cb) {
    cb(null, res.originalname + new Date());
  }
})




const uploader = multer({ storage });
module.exports = uploader;
const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;