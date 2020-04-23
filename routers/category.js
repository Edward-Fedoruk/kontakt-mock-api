const express = require('express');
const { categoriesPrime, categoryProducts } = require('../mockData');
const { defaultGet } = require('../helpers');

const categoriesRouter = express.Router();

categoriesRouter.get('/', defaultGet(categoryProducts));

module.exports = categoriesRouter;