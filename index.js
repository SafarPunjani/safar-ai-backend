const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("The Safar AI backend is live 🚀");
});

// Chat API (dummy response for now)
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  res.json({
    reply: "Hello, I am The Safar AI 👋"
  });
});

// IMPORTANT for Render
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Safar AI backend running on port ${PORT}`);
});

