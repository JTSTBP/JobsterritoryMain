require("dotenv").config();

const express = require("express");

const cors = require("cors");
const connectDB = require("./config/db");
const getdata = require("./routes/data");
const admindata = require("./routes/admin");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running in Jobsterritory...");
});

app.use("/api", getdata);

app.use("/admin", admindata);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
