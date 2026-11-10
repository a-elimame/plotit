
const { GoogleGenAI } = require("@google/genai");


const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Plotit server is running!");
});

const PORT = 3000;

app.post("/api/chat", async (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.status(400).json({
            error: "Message is required"
        });
    }

    try {
        
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: message
        });
       

        res.json({ reply: response.text });


    } catch (error) {
        console.error("Gemini error:", error);

        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
