const express = require('express');
const app = express();

// Handle GET request
// URL: http://localhost:3000/get-data?name=John&age=25
app.get('/get-data', (req, res) => {
    // Access query parameters
    const name = req.query.name || 'Guest';
    const age = req.query.age || 'N/A';

    // Send JSON response
    res.json({
        message: 'GET request received successfully!',
        name: name,
        age: age
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`GET server running at http://localhost:${PORT}`);
});