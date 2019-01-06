const dayjs = require('dayjs');
/*
module.exports = (URL, app) => app
    .get(URL, (req, res) => res.send(dayjs().format('HH:mm DD/MM/YYYY')))
    .post(URL, (req, res) => res.send(req.body.name));*/
	
	module.exports = (URL, app) => app
    .get(URL, (req, res) => res.send("21.09.2018 - FIRST EXPRESS TASK"))
	.post(URL, (req, res) => res.send(req.body.name));

