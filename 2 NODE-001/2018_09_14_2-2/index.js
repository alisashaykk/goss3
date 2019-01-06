const http = require('http');
const url = require("url");
const moment = require('moment');

const server = http.createServer();
server.listen(4321);

server.on('request', (req, res) => {
	res.setHeader('Content-Type', 'application/json; charset=utf-8');

	let path = url.parse(req.url).pathname;  
	const elements = path.split('/').filter(n => n);

	if (elements[0] === 'add' && elements[1] && elements[2]) {
		res.end(JSON.stringify({ "Сумма": Number(elements[1]) + Number(elements[2]) }));
	} else res.end(JSON.stringify({ date: moment().format('DD.MM.YYYY HH:mm:ss') }));
});