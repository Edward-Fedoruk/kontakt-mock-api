const express = require('express');
const { categoriesPrime, categoryProducts } = require('../mockData');
const { defaultGet } = require('../helpers');

const categoriesRouter = express.Router();

categoriesRouter.get('/', (req, res) =>  {
  const { id } = req.query;
  console.log(id)
  const { text } = categoriesPrime.find(({ id: ctgId }) => ctgId === parseInt(id));

  res.status(200).send({
    title: text,
    banners: [
      {
        big: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner.jpg',
        medium: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-2.jpg',
        small: 'https://kontakt-mock-api.herokuapp.com/images/3-layers.jpg',
        smaller: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-4.jpg',
        extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-5.jpg'
      }, 
      {
        big: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner.jpg',
        medium: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-2.jpg',
        small: 'https://kontakt-mock-api.herokuapp.com/images/3-layers.jpg',
        smaller: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-4.jpg',
        extraSmall: 'https://kontakt-mock-api.herokuapp.com/images/ctg-banner-5.jpg'
      } 
    ],
    categoryProducts
  })
});

module.exports = categoriesRouter;