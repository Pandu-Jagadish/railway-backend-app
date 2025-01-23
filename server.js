const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // For parsing JSON in the body
app.use(cors({ origin: "*" }));

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/railways"; // Fallback to local DB for development

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/trains", require("./routes/train")); // Mounting the trains route

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
