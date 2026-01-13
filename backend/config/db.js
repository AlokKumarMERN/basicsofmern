// This file connects Node.js to MongoDB
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mernForm");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;
