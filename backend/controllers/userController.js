// Controller contains business logic (ES Module version)

import User from "../models/User.js";

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const user = new User({ name, email, age });
    await user.save();

    console.log("Saved User:", user);
    console.log("thank you");

    res.status(201).json({
      message: "User saved successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("All Users:", users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
