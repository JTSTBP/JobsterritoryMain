const mongoose = require("mongoose");

const caseStudySchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    images: {
      logo: {
        filename: { type: String }, // URL of client logo
      },
      main: {
        filename: { type: String }, // URL of main banner
      },
    },
    clientBackground: {
      type: String,
      required: true,
    },
    challenge: [
      {
        icon: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
    solution: [
      {
        icon: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
    resultsAchieved: [
      {
        icon: { type: String },
        title: { type: String },
        description: { type: String },
      },
    ],
    clientTestimonial: {
      quote: { type: String },
      author: { type: String },
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CaseStudy", caseStudySchema);
