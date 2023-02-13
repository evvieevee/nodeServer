const http = require("http");
const fs = require('fs');

http.createServer((request, response) => {
  if(request.url === "/a") {
    fs.readFile('./index.html', function (err, htmlFile) {
      if(err) console.log(err);
      response.writeHead(200, 'testing', {'Content-Type': 'text/html'});
      response.write(htmlFile);
      response.end();
    })
  }else {
    response.writeHead(200, 'testing', {'Content-Type': 'text/html'});
    response.write('<h1>sadsad</h1>');
    response.end();
  }
    
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');