const express = require('express');
const { specialOffers, newProducts, specialProducts, salsLeader } = require('../mockData');
const { DefaultPaginationGet } = require('../helpers');

const productsRouter = express.Router();

productsRouter.get('/home-special-offers', DefaultPaginationGet(specialOffers));
productsRouter.get('/new-products', DefaultPaginationGet(newProducts));
productsRouter.get('/special-products', DefaultPaginationGet(specialProducts));
productsRouter.get('/sales-leaders', DefaultPaginationGet(salsLeader));

module.exports = productsRouter;
