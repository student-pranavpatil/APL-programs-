import express from "express";
const app = express();
const PORT = 3000
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
res.send(`
<html>
<head>
<title>Express Request & Response</title>
<style>
body { font-family: Arial; background: #f0f8ff; text-align: center; padding: 40px; }
h1 { color: #333; }
.btn { background: #0078d7; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; }
input, textarea { width: 250px; margin: 8px; padding: 8px; border-radius: 6px; border:
1px solid #ccc; }
</style>
</head>
<body>
<h1>Welcome to Express.js Demo</h1>
<p>This page shows handling of requests and responses using Express.js</p>
<form action="/contact" method="POST">
<input type="text" name="name" placeholder="Enter your name" required><br>
<textarea name="message" placeholder="Your message" required></textarea><br>
<button type="submit" class="btn">Send</button>
</form>
</body>
</html>
`);
});
app.post("/contact", (req, res) => {
const { name, message } = req.body
res.send(`
<html>
<head>
<title>Response Page</title>
<style>
body { font-family: Arial; background: #e0ffe0; text-align: center; padding: 40px; }
h1 { color: #2e7d32; }
a { text-decoration: none; color: white; background: #0078d7; padding: 8px 16px; border-radius: 6px; }
</style>
</head>
<body>
<h1>Thank You, ${name}!</h1>
<p>Your message "<b>${message}</b>" has been received successfully.</p>
<a href="/">Go Back</a>
</body>
</html>
`);
});
app.listen(PORT, () => console.log(`7'•˙¸.sServer running on http://localhost:${PORT}`));