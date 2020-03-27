const express = require('express');
const { searchHistory, mostPopularProducts, products } = require('../mockData');
const { defaultGet } = require('../helpers');

const searchRouter = express.Router();

searchRouter.get('/', (req, res) => {
  const { query } = req.query;

  res
    .status(200)
    .send(
      products
        .filter(({ productName }) => 
          productName
            .toLowerCase()
            .includes(query.toLowerCase())
        )
        .slice(0, 20)
    );
});
searchRouter.get('/history', defaultGet(searchHistory));
searchRouter.get('/popular', defaultGet(mostPopularProducts));

module.exports = searchRouter;
