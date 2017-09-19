const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const path = require('path');

var storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

module.exports = multer({storage});

