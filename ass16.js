// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
// Middleware to parse JSON data
app.use(express.json());
// --------------------
// MongoDB Connection
// --------------------
mongoose.connect('mongodb://localhost:27017/studentDB', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => console.log(' Connected to MongoDB successfully!'))
.catch(err => console.error(' MongoDB connection error:', err));
// --------------------
// Define Schema and Model
// --------------------
const studentSchema = new mongoose.Schema({
name: String,
age: Number,
course: String
});
const Student = mongoose.model('Student', studentSchema);
// --------------------
// Routes
// --------------------
// Default route
app.get('/', (req, res) => {
res.send('Welcome to Express + MongoDB Demo!');
});
// Add new student (POST)
app.post('/students', async (req, res) => {
try {
const { name, age, course } = req.body;
// Handle empty request
if (!name || !age || !course) {
return res.status(400).send(' Please provide name, age, and course!');
}
const student = new Student({ name, age, course });
await student.save();
res.status(201).send(` Student ${name} added successfully!`);
} catch (err) {
res.status(500).send(' Error adding student: ' + err);
}
})
// --------------------
// Start Server
// --------------------
app.listen(3000, () => {
console.log(' Server is running at http://localhost:3000');
})