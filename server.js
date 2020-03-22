const express = require('express');
const app = express();
const routers = require('./routers')

const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

Object.entries(routers).forEach(
	([routeName, router]) => app.use(`/${routeName}`, router)
)

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => 
	console.log('Our app is running on http://localhost:' + port)
);