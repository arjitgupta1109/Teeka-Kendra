const express = require("express");
const router = express.Router();

// Dummy register route
router.post("/register", (req, res) => {
    res.send("User registered");
});

// Dummy login route
router.post("/login", (req, res) => {
    res.send("User logged in");
});

module.exports = router;
