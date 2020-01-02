const http = require('http');



const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    const vips = ["Joe", "Eric", "Allyson"];
    let reqUrl = req.url.slice(1);
    let content = `Hello, ${reqUrl}`;
    
    if (vips.includes(reqUrl)) {
        content = `How wonderfully splendid it is to be in your presence again, ${reqUrl}! You look magnificent today!`;
    }
    res.end(content);
})

server.listen(3000, () => {
    console.log('listening on port 3000')
});