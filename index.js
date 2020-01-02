const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    let reqUrl = req.url.slice(1);
    let content = `Hello, ${reqUrl}`;
    res.end(content);
})

server.listen(3000, () => {
    console.log('listening on port 3000')
});