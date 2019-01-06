const axios = require('axios');

const URL = 'https://kodaktor.ru/api2';

module.exports = (proxy, app) => app
    .get(proxy, async (req, res) => {
        const result = await axios
            .get(`${URL}${req.path}`)
            .then(({ data }) => String(data))
        res.send(result);
    });
