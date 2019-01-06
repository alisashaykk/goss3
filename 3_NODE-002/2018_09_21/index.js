//const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const main = require('./main');
const calculator = require('./calc');
const kramer = require('./kramer');
//const traffic = require('./traffic');
const kodaktor = require('./kodaktor');
const weather = require('./weather');
//const ruin = require('./ruin');
//const errors = require('./errors');
//const { withTrafficCounter } = require('./traffic/utils/trafficCounter');

const PORT=4321;
const app=express();

app.use(morgan('dev'));


// Body parsing middleware.
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: true }));

// HTML modules renderer.
//app.engine('html', ejs.renderFile);

//app.use(withTrafficCounter);


main('/', app);
calculator('/:method(add|subtract|multiply|divide|pow)/:a/:b', app);
kramer('/kramer/:a1/:b1/:c1/:a2/:b2/:c2', app);
//traffic('/traffic', app);
kodaktor('/:method(there|andba)/:number', app);
weather('/weather', app);
//ruin('/ruin', app);
//errors(app);

app.get('/', (req, res) => {
    throw new Error('oops');
})
app.use((err, req, res, next) => {
    // логирование ошибки, пока просто console.log
    console.log(err);
    res.status(500).send('Server error!');
})

app.listen(PORT);
