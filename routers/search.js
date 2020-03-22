const express = require('express');
const { searchHistory, mostPopularProducts } = require('../mockData');
const { defaultGet } = require('../helpers');

const searchRouter = express.Router();

searchRouter.get('/history', defaultGet(searchHistory));
searchRouter.get('/popular', defaultGet(mostPopularProducts));

module.exports = searchRouter;
