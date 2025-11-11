const fs = require('fs');

// 1. CREATE & WRITE to a file
fs.writeFileSync('example.txt', 'This is the first line.');
console.log('1. File created and written successfully.');

// 2. READ the file
let data = fs.readFileSync('example.txt', 'utf8');
console.log('2. File content:', data);

// 3. APPEND data to the file
fs.appendFileSync('example.txt', '\nThis line is appended.');
console.log('3. Data appended successfully.');

// 4. RENAME the file
fs.renameSync('example.txt', 'newExample.txt');
console.log('4. File renamed successfully.');

// 5. DELETE the file
fs.unlinkSync('newExample.txt');
console.log('5. File deleted successfully.');
