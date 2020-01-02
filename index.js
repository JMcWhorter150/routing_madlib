const http = require('http');



const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    const vips = {
        "Joe": `It is wonderful to see you again`,
        "notJoe": `You're a villain`,
        "Chris": `I promise I'm working on things`
    };
    let reqUrl = req.url.slice(1);
    let content = `Hello, ${reqUrl}`;
    if (Object.keys(vips).includes(reqUrl)) {
        content = vips[reqUrl];
    }
    res.end(content);
})

server.listen(3000, () => {
    console.log('listening on port 3000')
});