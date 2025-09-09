
// Instead of import ...
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

// Cloudinary config
cloudinary.config({
  cloud_name: "df7lukf8a",
  api_key: "969796416943886",
  api_secret: "Yf6hHw-gne-L-xulJ-VszgNMGjw",
});

// Storage setup
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "my_uploads",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

module.exports = { upload };
