const mongoose = require("mongoose");

const subscribe = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscribedlist", subscribe);
