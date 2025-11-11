const express = require('express');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle POST request
app.post('/post-data', (req, res) => {
    // Access form data from req.body
    const name = req.body.name || 'Guest';
    const age = req.body.age || 'N/A';

    // Send JSON response
    res.json({
        message: 'POST request received successfully!',
        name: name,
        age: age
    });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`POST server running at http://localhost:${PORT}`);
});