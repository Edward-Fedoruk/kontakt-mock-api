const express = require('express');
const { categories } = require('../mockData');
const { defaultGet } = require('../helpers');

const categoriesRouter = express.Router();

categoriesRouter.get('/categories', defaultGet(categories));

module.exports = categoriesRouter;