const express = require('express');
const { SubMenuCategories, spreadedCategories } = require('../mockData');
const { defaultGet } = require('../helpers');

const menuRouter = express.Router();

menuRouter.get('/submenu-categories', defaultGet(SubMenuCategories));

menuRouter.get('/', (req, res) => {
  const menu = spreadedCategories.map(({ id, name, thumbIcon, subCategories }) => ({
    id,
    name,
    thumbIcon,
    subCategories: subCategories.map(({ id, name, filters }) => ({ 
      id, 
      name, 
      filters: filters.map(({ id, name, thumbIcon }) => ({
        thumbIcon,
        name,
        id
      }))
    }))
  }));
  res.send({ menu }).status(200)
})

module.exports = menuRouter;
