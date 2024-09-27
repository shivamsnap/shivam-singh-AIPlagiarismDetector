const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const { OpenAI } = require('openai'); 
const cors = require('cors');
const env = require('dotenv');

const app = express();
const port = 3000;
env.config();

// Enable CORS for all routes and origins
app.use(cors()); 

// Initialize OpenAI instance with the API key
const openai = new OpenAI({
  apiKey: process.env.API_KEY,
   apiKey: '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',
  )};

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Function to extract text from PDF files
const extractTextFromPDF = async (filePath) => {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
};

// Function to extract text from DOC/DOCX files
const extractTextFromDoc = async (filePath) => {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
};

// Route for file uploads and plagiarism check
app.post('/check-plagiarism', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const filePath = req.file.path;
  let extractedText = '';

  // Determine the file type and extract text accordingly
  if (path.extname(req.file.originalname) === '.pdf') {
    extractedText = await extractTextFromPDF(filePath);
  } else if (['.doc', '.docx'].includes(path.extname(req.file.originalname))) {
    extractedText = await extractTextFromDoc(filePath);
  } else {
    return res.status(400).send('Unsupported file format. Please upload a PDF, DOC, or DOCX file.');
  }

  // Use OpenAI API to check for similarity/plagiarism (You can use prompt-engineering here)
  try {
    const prompt = `Check if the following text is plagiarized: ${extractedText}`;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1500, // Adjust token limit as needed
    });

    const aiResponse = response.choices[0].message.content.trim();

    res.send({
      message: 'Plagiarism Check Complete',
      extractedText,
      aiResponse
    });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Error during plagiarism check.');
  } finally {
    // Optionally, delete the file after processing
    fs.unlinkSync(filePath);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
