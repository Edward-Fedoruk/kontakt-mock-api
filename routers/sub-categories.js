const express = require('express');
const { spreadCategories } = require('../mockData');

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) =>  {
  const subCategory = spreadCategories
    .map(({ subCategories }) => subCategories)
    .find(({ id }) => id === req.query.id);

  res.status(200).send({ subCategory })
});

module.exports = categoriesRouter;