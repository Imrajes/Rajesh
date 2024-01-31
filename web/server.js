// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for contact form submissions
let contactData = [];

// Route to handle contact form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;

  // Store the data in memory (you might want to use a database in a real application)
  contactData.push({ name, email, message });

  res.send('Contact form submitted successfully!');
});

// Route to retrieve stored contact data
app.get('/get-contact-data', (req, res) => {
  res.json(contactData);
});

// Serve your HTML file
app.use(express.static('public')); // assuming your HTML file is in a "public" directory

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
