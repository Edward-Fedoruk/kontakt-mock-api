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
    subCategories: [
      { id }
    ],
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
    categoryProducts,
    seo: {
      title: 'Мобильные телефоны в Kontakt Home!',
      paragraph1: 'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi,  Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают  смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.  В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS.',
      paragraph2: 'Contact Home предлагает лучшие предложения для тех, кто хочет купить мобильные телефоны. Предлагаемые вам модели мобильных телефонов - это всемирно известные Apple, Asus, HTC, LG, Huawei, Xiaomi,  Nokia, Samsung и другие. это продукция брендов. В настоящее время многие технологические бренды выпускают  смартфоны. Конкуренция в телефонной индустрии растет день ото дня, и бренды внедряют последние инновации.  В настоящее время растет спрос на мобильные телефоны с операционными системами Android и iOS.',
      tags: ['apple', 'samsung', 'Hofman', 'дешевые телефоны', 'Телефон Xiaomi']
    }
  })
});

module.exports = categoriesRouter;