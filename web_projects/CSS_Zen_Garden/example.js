const http = require('http');

var i = 0;
http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World ' + i++ + '\n');
}).listen(80);

console.log('Server running at http://127.0.0.1:8080/');