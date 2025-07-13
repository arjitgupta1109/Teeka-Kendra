// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup Route
router.post("/signup", async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {
        const existingUser = await User.findOne({ mobileNumber });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ mobileNumber, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {
        const user = await User.findOne({ mobileNumber, password });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
