const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

// Parse JSON bodies
app.use(express.json());

// Serve static files (your frontend) from /public
app.use(express.static(path.join(__dirname, "public")));

// Dummy user (replace with DB later)
const USER = { email: "test@example.com", password: "123456" };

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  if (email === USER.email && password === USER.password) {
    return res.json({ success: true, message: "Login successful!" });
  }
  return res
    .status(401)
    .json({ success: false, message: "Invalid credentials" });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
