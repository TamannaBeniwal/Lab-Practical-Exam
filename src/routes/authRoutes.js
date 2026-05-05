const express = require("express");
const router = express.Router();

const USER = require("../schema/user");
const isAuthenticated = require("../middleware/auth");

// LOGIN
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    req.session.user = username;
    res.send("Login Successful");
  } else {
    res.status(401).send("Invalid Credentials");
  }
});


router.get("/dashboard", isAuthenticated, (req, res) => {
  res.send(`Welcome ${req.session.user}`);
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out successfully");
  });
});

module.exports = router;