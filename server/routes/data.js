const express = require("express");
const Blog = require("../models/blogs");
const CaseStudy = require("../models/casestudies");
const Contact = require("../models/contact");
const Logos = require("../models/logos");
const Testimonial = require("../models/testimonials");
const RecruiterRequest = require("../models/recruiterReq");

const { sendContactmail, sendRecruitermail } = require("../utils/sendemails");

const router = express.Router();

// @desc   Get all blogs
// @route  GET /api/blogs
router.get("/getblogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    //       .populate(
    //   "user",
    //   "firstName lastName email"
    // ); // optional populate
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get blog by slug
router.get("/blogs/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// casestudies
router.get("/getcasestudies", async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find();
    res.json(caseStudies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single case study by slug
router.get("/casestudy/:slug", async (req, res) => {
  try {
    const study = await CaseStudy.findOne({ slug: req.params.slug });
    if (!study)
      return res.status(404).json({ message: "Case study not found" });
    res.json(study);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post contact
router.post("/addcontact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    await sendContactmail(req.body);
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error, please try again." });
  }
});

// @desc   Get all leads
// @route  GET /api/leads
router.get("/getcontacts", async (req, res) => {
  try {
    const leads = await Contact.find();
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Get all categories
// @route  GET /api/categories
router.get("/getlogos", async (req, res) => {
  try {
    const categories = await Logos.find();
    //       .populate(
    //   "user",
    //   "firstName lastName email"
    // ); // optional populate
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all testimonials
router.get("/gettestimonials", async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: "Error fetching testimonials", error });
  }
});

// recruiter request
// POST - Save recruiter request
router.post("/add-recruiter-request", async (req, res) => {
  try {
    const { name, phone, email, company, requirement, level } = req.body;

    if (!name || !phone || !email || !company) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const newRequest = new RecruiterRequest({
      name,
      phone,
      email,
      company,
      requirement,
      level,
    });

    await newRequest.save();
    // send email notification (separate from contact mail)
    await sendRecruitermail(newRequest);
    res
      .status(200)
      .json({ message: "Recruiter request submitted successfully" });
  } catch (error) {
    console.error("Error saving recruiter request:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// (Optional) GET - Fetch all recruiter requests (for admin)
router.get("/recruiter-requests", async (req, res) => {
  try {
    const requests = await RecruiterRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error("Error fetching recruiter requests:", error);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = router;
