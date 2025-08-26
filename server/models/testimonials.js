const mongoose = require("mongoose");


const testimonialSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("testimonial", testimonialSchema);
