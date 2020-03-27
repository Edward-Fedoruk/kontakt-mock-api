const express = require('express');
const { searchHistory, mostPopularProducts, products } = require('../mockData');
const { defaultGet } = require('../helpers');

const searchRouter = express.Router();

searchRouter.get('/', (req, res) => {
  const { query } = req.query;
  const filtered = products
    .filter(({ productName }) => productName.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 20);
  const categories = filtered.map(({ category }) => category); 
  const matchedProducts = filtered.map(({ productName }) => productName);
  const popularProducts = filtered.slice(-4)

  res.status(200).send({
    popularProducts,
    categories,
    products: matchedProducts,
    notFound: filtered.length === 0
  });
});
searchRouter.get('/history', defaultGet(searchHistory));
searchRouter.get('/popular', defaultGet(mostPopularProducts));

module.exports = searchRouter;
