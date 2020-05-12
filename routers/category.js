const express = require('express');
const { spreadCategories } = require('../mockData');

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) =>  {
  const { 
    id, 
    name, 
    categoryBanners, 
    seoBlock, 
    tags,
    subCategories
  } = spreadCategories.find((ctg) => ctg.id === req.query.id);

  res.status(200).send({ 
    id, 
    name,
    categoryBanners, 
    seoBlock, 
    tags,
    subCategories,
  })
});

module.exports = categoriesRouter;