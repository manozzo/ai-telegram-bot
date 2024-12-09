const express = require("express");
const { queryOllama } = require("../services/ollamaService");
const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await queryOllama(message);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
