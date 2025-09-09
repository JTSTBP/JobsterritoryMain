// routes/adminRoutes.js
const express = require("express");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/admin");
const Blog = require("../models/blogs");
const CaseStudy = require("../models/casestudies");
const Contact = require("../models/contact");
const Logos = require("../models/logos");
const Testimonial = require("../models/testimonials");
const RecruiterRequest = require("../models/recruiterReq");
const router = express.Router();
const { upload } = require("./../cloudinary");

/**
 * @route   POST /api/admin/admin-login
 * @desc    Login admin
 */
router.post("/admin-login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role || "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Admin login successful ✅",
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error during admin login", error });
  }
});

/**
 * @route   POST /api/admin/create-dummy-admin
 * @desc    Create default admin (only once)
 */
router.post("/create-dummy-admin", async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({
      email: "admin@jobsterritory.com",
    });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const newAdmin = new Admin({
      fullName: "Super Admin",
      email: "admin@jobsterritory.com",
      password: hashedPassword,
      role: "superadmin",
    });

    await newAdmin.save();
    res.status(201).json({ message: "Dummy admin created successfully ✅" });
  } catch (error) {
    console.error("Dummy admin creation error:", error);
    res.status(500).json({ message: "Error creating admin", error });
  }
});

const modelMap = {
  blogs: Blog,
  casestudies: CaseStudy,
  testimonials: Testimonial,
  contactus: Contact,
  recruiters: RecruiterRequest,
  logos: Logos,
};

// For multiple fields dynamically, use .any()
router.post("/:type", upload.any(), async (req, res) => {
  const { type } = req.params;
  const Model = modelMap[type.toLowerCase()];
  if (!Model) return res.status(400).json({ message: "Invalid type" });
  console.log(req.body);
  try {
    const data = { ...req.body };

    // Attach uploaded files
    req.files.forEach((file) => {
      data[file.fieldname] = file.path; // save path to DB
    });

    // Convert arrays and objects if sent as JSON strings
    for (const key in data) {
      try {
        const parsed = JSON.parse(data[key]);
        if (typeof parsed === "object") data[key] = parsed;
      } catch (err) {
        // not JSON, keep as string
      }
    }

    const created = await Model.create(data);
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating item", error: err.message });
  }
});

// ✅ Single dynamic route
router.get("/:type", async (req, res) => {
  const { type } = req.params;

  try {
    let data;

    switch (type.toLowerCase()) {
      case "blogs":
        data = await Blog.find();
        break;
      case "testimonials":
        data = await Testimonial.find();
        break;
      case "contactus":
        data = await Contact.find();
        break;
      case "recruiters":
        data = await RecruiterRequest.find();
        break;
      case "casestudies":
        data = await CaseStudy.find();
        break;
      case "logos":
        data = await Logos.find();
        break;
      default:
        return res.status(400).json({ error: "Invalid type" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Example in Express
router.delete("/:type/:id", async (req, res) => {
  const { type } = req.params;
  console.log(type, "type", req.params);
  try {
    let deleted;
    switch (type.toLowerCase()) {
      case "blogs":
        deleted = await Blog.findByIdAndDelete(req.params.id);
        break;
      case "testimonials":
        deleted = await Testimonial.findByIdAndDelete(req.params.id);
        break;
      case "contactus":
        deleted = await Contact.findByIdAndDelete(req.params.id);
        break;
      case "recruiters":
        deleted = await RecruiterRequest.findByIdAndDelete(req.params.id);
        break;
      case "casestudies":
        deleted = await CaseStudy.findByIdAndDelete(req.params.id);
        break;
      case "logos":
        deleted = await Logos.findByIdAndDelete(req.params.id);
        break;
      default:
        return res.status(400).json({ error: "Invalid type" });
    }
    console.log(type, "type", deleted, "del");

    if (!deleted) return res.status(404).json({ message: "Item not found" });

    res.json({ message: "Deleted successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting item", error: err });
  }
});

router.put("/:type/:id", async (req, res) => {
  const { type, id } = req.params;
  const data = req.body;

  const Model = modelMap[type.toLowerCase()];
  if (!Model) return res.status(400).json({ message: "Invalid type" });

  try {
    const updated = await Model.findByIdAndUpdate(id, data, {
      new: true, // return the updated document
      runValidators: true, // validate schema
    });

    if (!updated) return res.status(404).json({ message: "Item not found" });

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating item" });
  }
});

module.exports = router;
