'use strict';
const express = require('express'),
    app = express(),
    request = require('request');
	

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static('resources'));

app.get('/', function(req, res){
    request({
        method: 'GET',
        url:'https://api.themoviedb.org/3/search/movie?api_key=ea848ecf7dcc6630ee9db544ee777786&query=Jack+Reacher'
        
    }, 
    function(error, response,body){
        let pokemon = JSON.parse(body);
        //console.log(pokemon);
        
        res.render('final project', {pokemon});
    });
});

const server = app.listen(3000, function() {
	console.log(`Server started on port ${server.address().port}`);
});