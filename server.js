const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./build/index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});