const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/blockchain', function (req, res) {
    res.send('/blockchain endpoint reached');
});

app.post('/transaction', function (req, res) {
    console.log(req.body);
    res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`);
});

app.get('/mine', function (req, res) {
    res.send('/mine endpoint reached');
});

app.listen(3000, function () {
    console.log('listening on port 3000...');
});