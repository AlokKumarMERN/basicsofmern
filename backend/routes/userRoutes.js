// Routes decide URL and controller (ES Module version)

import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

// POST form data
router.post("/users", createUser);

// GET all users
router.get("/users", getUsers);

export default router;
