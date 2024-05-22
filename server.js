const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.post('/generate-interesting-fact', async (req, res) => {
  const { animal } = req.body;
  const userMessage = `Create an interesting fact about the ${animal}, 2 sentences only and no more than 200 characters and no hashtags.`;

  try {
    const userResponse = await axios.post(
      'https://api-inference.huggingface.co/models/meta-llama/Meta-Llama-3-8B-Instruct',
      { inputs: userMessage },
      { headers: { Authorization: `Bearer ${process.env.API_KEY}` } }
    );

    if (!userResponse.data || !userResponse.data[0]) {
      throw new Error('Invalid response structure');
    }

    const llamaMessage = userResponse.data[0].generated_text;

    res.json({ llamaMessage });
  } catch (error) {
    console.error(
      'Error generating interesting fact:',
      error.response ? error.response.data : error.message
    );
    res.status(500).json({
      error: 'Failed to generate interesting fact',
      details: error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
