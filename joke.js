const axios = require('axios');

function getJoke() {
    const jokeUrl = `https://api.chucknorris.io/jokes/random?category=dev`
    return axios.get(jokeUrl)
        .then( (response) => {
            return response.data.value;
        })
}

module.exports = {
    getJoke
}