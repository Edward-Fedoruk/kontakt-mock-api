const express = require('express');
const app = express();
const { BlogItems } = require('./mockData');

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

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/test-status', (req, res) => {
	res.sendStatus(200);
});

app.get('/blog-items', (req, res) => {
	res.json(BlogItems);
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});