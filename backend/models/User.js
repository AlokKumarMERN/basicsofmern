// This file defines the structure of data in MongoDB (ES Module version)

import mongoose from "mongoose";

// Schema = structure of a document
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // field must be filled
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Create Model
const User = mongoose.model("User", userSchema);

// Export model (ES Module)
export default User;
