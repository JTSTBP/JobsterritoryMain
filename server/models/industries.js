const mongoose = require("mongoose");

const industrySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        longDescription: {
            type: String, // HTML string for detail page
        },
        challenges: [
            {
                title: String,
                description: String,
                icon: String,
            },
        ],
        solutions: [
            {
                title: String,
                description: String,
                icon: String,
            },
        ],
        placements: {
            type: String,
        },
        banner: {
            type: String, // image URL
        },
        img: {
            type: String, // icon/thumbnail image URL
        },
        bg: {
            type: String,
            default: "bg-purple-50",
        },
        text: {
            type: String,
            default: "text-purple-600",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("industries", industrySchema);
