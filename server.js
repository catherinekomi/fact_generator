const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());

app.post('/generate-interesting-fact', async (req, res) => {
  const { animal } = req.body;
  const userMessage = `Create an interesting fact about the ${animal}, 2 sentences only.`;

  try {
    const userResponse = await axios.post(
      'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct',
      { inputs: userMessage },
      { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
    );

    const llamaMessage = userResponse.data[0].generated_text;

    res.json({ llamaMessage });
  } catch (error) {
    console.error('Error generating interesting fact:', error);
    res.status(500).json({ error: 'Failed to generate interesting fact' });
  }
});

module.exports = app;
