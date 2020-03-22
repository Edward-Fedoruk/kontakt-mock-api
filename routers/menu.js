const express = require('express');
const { SubMenuCategories } = require('../mockData');
const { defaultGet } = require('../helpers');

const menuRouter = express.Router();

menuRouter.get('/submenu-categories', defaultGet(SubMenuCategories));

module.exports = menuRouter;
