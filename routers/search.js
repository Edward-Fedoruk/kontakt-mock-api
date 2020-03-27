const express = require('express');
const { searchHistory, mostPopularProducts, products } = require('../mockData');
const { defaultGet } = require('../helpers');

const searchRouter = express.Router();

searchRouter.get('/', (req, res) => {
  const { query } = req.query;
  const filtered = products
    .filter(({ productName }) => productName.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 20);
  const categories = filtered
    .map(({ category }) => category)
    .reduce((acc, { name, id }) => {
      const names = acc.map(({ name }) => name);
      return [...new Set([...names, name])].length === [...names, name].length
        ? [...acc, { name, id }] : acc
    }, []);

  const matchedProducts = filtered
    .map(({ productName, id }) => ({ productName, id }))
    .reduce((acc, { productName, id }) => {
      const names = acc.map(({ productName }) => productName);
      return [...new Set([...names, productName])].length === [...names, productName].length
        ? [...acc, { productName, id }] : acc
    }, []);
  const popularProducts = filtered.slice(-4)
  console.log(matchedProducts)
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
