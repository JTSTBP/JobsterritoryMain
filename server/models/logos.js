const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String, // Image URL
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // reference to User who created the category
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("logos", categorySchema);
