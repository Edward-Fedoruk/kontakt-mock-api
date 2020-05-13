const express = require('express');
const { spreadCategories, products } = require('../mockData');

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
    category: {
      id, 
      name,
      categoryBanners, 
      seoBlock, 
      tags,
      subCategories: subCategories.map(s => ({
        ...s,
        featuredProducts: [...products.map((p) => p).slice(0, 4)]
      })),
    }
  })
});

module.exports = categoriesRouter;