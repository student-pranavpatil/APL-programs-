// Import the 'fs' module
const fs = require('fs');
// CREATE a new file and write data
fs.writeFile('example.txt', 'Hello, this is a Node.js File System demo!', (err) => {
if (err) throw err;
console.log(' File created and data written successfully!');
// READ the file content
fs.readFile('example.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('\n File Content:');
console.log(data);
// APPEND data to the file
fs.appendFile('example.txt', '\nAdding more data to the file...', (err) => {
if (err) throw err;
console.log('\n Data appended successfully!');
// RENAME the file
fs.rename('example.txt', 'newExample.txt', (err) => {
if (err) throw err;
console.log('\n File renamed to "newExample.txt"');
});
});
});
});