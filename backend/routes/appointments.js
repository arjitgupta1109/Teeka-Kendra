const express = require("express");
const router = express.Router();

// Dummy appointment route
router.post("/book", (req, res) => {
    res.send("Appointment booked");
});

module.exports = router;
