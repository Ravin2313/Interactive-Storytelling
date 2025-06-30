const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home"); // Homepage becomes /
});

router.get("/select", (req, res) => {
  res.render("select"); // Story selection page becomes /select
});

module.exports = router;
