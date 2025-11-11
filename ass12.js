// Import Node.js built-in web modules
const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");
// Create a simple server
const server = http.createServer((req, res) => {
 // Parse the request URL
 const parsedUrl = url.parse(req.url, true);
 const pathname = parsedUrl.pathname;
 // Home page
 if (pathname === "/" || pathname === "/home") {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write("<h1>Welcome to My Node.js Web Module Demo</h1>");
 res.write("<p><a href='/about'>About</a> | <a href='/contact'>Contact</a> | <ahref='/form'>Form</a></p>");
 res.end();
 }
 // About page
 else if (pathname === "/about") {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write("<h1>About Us</h1>");
 res.write("<p>This page is served using Node.js HTTP and URL modules.</p>");
 res.end();
 }
 // Contact page
 else if (pathname === "/contact") {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write("<h1>Contact Page</h1>");
 res.write("<p>Email: support@nodewebdemo.com</p>");
 res.end();
 }
 // Simple HTML Form (GET request)
 else if (pathname === "/form") {
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write(`
 <h1>Submit Your Details</h1>
 <form action="/submit" method="get">
 Name: <input type="text" name="name" /><br><br>
 City: <input type="text" name="city" /><br><br>
 <input type="submit" value="Submit" />
 </form>
 `);
 res.end();
 }
 // Handle form submission using querystring
  else if (pathname === "/submit") {
 const query = parsedUrl.query;
 res.writeHead(200, { "Content-Type": "text/html" });
 res.write("<h1>Form Submitted Successfully!</h1>");
 res.write(`<p>Name: ${query.name}</p>`);
 res.write(`<p>City: ${query.city}</p>`);
 res.end();
 // Save data to a file using fs module
 const data = `Name: ${query.name}, City: ${query.city}\n`;
 fs.appendFile("formData.txt", data, (err) => {
 if (err) throw err; 
 console.log("Data saved to formData.txt");
 });
 }
 // Handle 404 error
 else {
 res.writeHead(404, { "Content-Type": "text/html" });
 res.write("<h1>404 Page Not Found</h1>");
 res.end();
 }
});
// Start the server
server.listen(3000, () => {
 console.log("Server running at http://localhost:3000/");
})
