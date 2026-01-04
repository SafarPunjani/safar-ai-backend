require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Safar AI backend is running 🚀"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Safar AI backend running on port ${PORT}`);
});
