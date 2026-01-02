require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// --- TEST ROUTE ---
app.post('/generate-poem', (req, res) => {
    const { topic } = req.body;
    console.log("Topic received:", topic);

    if (!topic) {
        return res.status(400).json({ error: "Topic likho bhai!" });
    }

    // Bina AI ke direct response (Testing ke liye)
    const poem = `Magic World of ${topic}:\nStars are shining, birds are singing,\nTo the world of ${topic}, joy we are bringing! ✨`;
    
    res.json({ poem: poem });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is 100% running on http://localhost:${PORT}`);
});