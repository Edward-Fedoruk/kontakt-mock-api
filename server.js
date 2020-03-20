const express = require('express');
const app = express();
const mockData = require('./mockData');
const { handlePaginationRequest } = require('./helpers');

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const addRoute = (route, resData) => 
	app.get(route, (req, res) => 
		res.json(resData));

const addPaginationRoute = (route, resData) => 
	app.get(route, (req, res) => 
		res.json(handlePaginationRequest(req.query, resData)));

app.get('/', (req, res) => res.render('index'));


addPaginationRoute('/home-special-offers', mockData.specialOffers);
addPaginationRoute('/new-products', mockData.newProducts);
addPaginationRoute('/special-products', mockData.specialProducts);
addPaginationRoute('/sales-leaders', mockData.salsLeader);


addRoute('/general-home-slides', mockData.generalSlides);
addRoute('/news-home-slides', mockData.newsSlides);
addRoute('/promotions-home-slides', mockData.promotionsSides);
addRoute('/small-banners', mockData.smallBanners);
addRoute('/blog-items', mockData.BlogItems);
addRoute('/submenu-categories', mockData.SubMenuCategories);
addRoute('/wide-banners', mockData.wideBanners);


app.listen(port, () => 
	console.log('Our app is running on http://localhost:' + port)
);