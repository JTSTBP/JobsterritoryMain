const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String, // image URL
      required: true,
    },
    desc: {
      type: String, // HTML string
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you have a User model
    
    },
    slug: {
      type: String,
      required: true,
      unique: true, // unique slug for SEO friendly URLs
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true } // will auto add createdAt & updatedAt
);

module.exports = mongoose.model("blogs", blogSchema);
