const express = require('express');
const { defaultGet } = require('../helpers');
const {
  wideBanners,
  smallBanners,
  generalSlides,
  newsSlides,
  promotionsSides,
  categorySlides,
} = require('../mockData');

const bannersRouter = express.Router();

bannersRouter.get('/general-home-slides', defaultGet(generalSlides));
bannersRouter.get('/news-home-slides', defaultGet(newsSlides));
bannersRouter.get('/promotions-home-slides', defaultGet(promotionsSides));
bannersRouter.get('/small-banners', defaultGet(smallBanners));
bannersRouter.get('/wide-banners', defaultGet(wideBanners));
bannersRouter.get('/category-slides', defaultGet(categorySlides));

module.exports = bannersRouter;
