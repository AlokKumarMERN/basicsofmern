// const express = require("express");
import express from "express";
import cors from "cors";
// const cors = require("cors");
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"; 

// const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors()); // allow frontend connection
app.use(express.json()); // parse JSON body

// Connect Database
connectDB();

// Routes
app.use("/api", userRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
