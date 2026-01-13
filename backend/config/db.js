// This file connects Node.js to MongoDB

// const mongoose = require("mongoose");
import mongoose from "mongoose";

// Function to connect database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mernForm");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

// module.exports = connectDB;
export default connectDB;
