const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function send404res(res) {
	res.writeHead(404, ("Content-Type": "text/plain"));
        res.write("Error 404: Page not found!");
	res.end();
}

fs.readFile('index.html',(err, html) => {
	if(err){
	  throw err;
	}
	
	const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  res.setHeader('Content-type', 'text/html');
	  res.write(html);
	  res.end();
	});

	server.listen(port, hostname,  () => {
	  console.log('Server started on port: ' + port);
	});
});


