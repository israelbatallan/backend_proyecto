const { getRandomNumbers } = require('./random-nums');

const Router = require('express').Router;

const routerRandomNums = Router();

routerRandomNums.get('/',  (req, res) => {
    const cantidad = req.query.cantidad || 1e8;
    res.json(getRandomNumbers(cantidad));
});

module.exports = routerRandomNums;