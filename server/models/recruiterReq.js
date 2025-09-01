// models/RecruiterRequest.js
const mongoose = require("mongoose");


const RecruiterRequestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    requirement: {
      type: String,
      default: "",
      trim: true,
    },
    level: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RecruiterRequest", RecruiterRequestSchema);
