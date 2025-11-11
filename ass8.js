var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  if (req.url === '/') {
    fs.readFile('input.txt', function (err, data) {
      if (err) {
        res.write('<h3>Error reading file</h3>');
      } else {
        res.write('<h2>File Content:</h2>');
        res.write('<pre>' + data.toString() + '</pre>');
      }
      res.write('<br><h3>Program Ended</h3>');
      res.end();
    });
  } else {
    res.end('Page not found');
  }

}).listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});