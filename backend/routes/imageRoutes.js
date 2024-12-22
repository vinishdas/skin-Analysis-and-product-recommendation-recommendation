const express = require('express');
const multer = require('multer');
const { analyzeImage } = require('../controllers/imageController');

const router = express.Router();

// Multer configuration for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), analyzeImage);

module.exports = router;
