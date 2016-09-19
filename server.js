var express = require('express');
var app = express();
var path = require('path');
var json = require('./client/data/foods.json')

app.use(express.static(path.join(__dirname, './client/')));
// app.use(express.static(path.join(__dirname, './bower_components/')));

app.get('/food/:restaurant',function(req, res) {
	// console.log(req.params.restaurant);
	for(var prop in json) {
		if (prop===req.params.restaurant) {
			console.log(json[prop]);
			res.json(json[prop]);
		}
	}
});

app.get('/food',function(req, res) {
	res.json(json);
});

app.listen(3000);