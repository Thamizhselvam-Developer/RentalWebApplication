const multer = require('multer');
const path = require('path');
const fs = require('fs');


const uploadDir = path.join(__dirname, '../uploads');
const pdfUploadDir = path.join(__dirname, '../uploads/pdf');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
if (!fs.existsSync(pdfUploadDir)) {
  fs.mkdirSync(pdfUploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    console.log(_file.mimetype,"multer")
    if (_file.mimetype.startsWith('image/')) {
      cb(null, uploadDir);
    } else if (_file.mimetype === 'application/pdf') {
      cb(null, pdfUploadDir);
    } else {
      // Handle other file types or reject them
      cb(new Error('Invalid file type'), false);
    }
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`);
  },
});

const upload = multer({ storage });





module.exports = upload;

