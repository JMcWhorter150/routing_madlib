const http = require('http');
const joke = require('./joke');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/joke')) {
        joke.getJoke()
            .then((jokeText) => {
                let name = req.url.slice(6) || "Chuck Norris";
                let text = jokeText.replace("Chuck Norris", name);
                res.end(text);
            })
    } else {
        res.end('No joke found')
    }

        // Removed from the Special VIP server to do the chuck norris joke stuff
    // const vips = {
    //     "Joe": `It is wonderful to see you again`,
    //     "notJoe": `You're a villain`,
    //     "Chris": `I promise I'm working on things`
    // };
    // let reqUrl = req.url.slice(1);
    // let content = `Hello, ${reqUrl}`;
    // if (Object.keys(vips).includes(reqUrl)) {
    //     content = vips[reqUrl];
    // }
    // res.end(content);
})

server.listen(3000, () => {
    console.log('listening on port 3000')
});