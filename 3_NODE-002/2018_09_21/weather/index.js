const axios = require('axios');

const endpoint = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20woeid%3D%222123260%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
const temperature = ({ data }) => `${data.query.results.channel.item.forecast[1].low}`;

module.exports = (URL, app) => app
    .get(URL, async (req, res) => {
        const result = await axios
            .get(endpoint)
            .then(temperature);
        res.send(result);
    });
