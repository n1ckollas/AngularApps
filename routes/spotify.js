var express =	require('express');
const http =	require('http');
var request = require('request');
var qs = require('querystring');
const credos = require('./credentials');

var app 		=	express();
var router	=	express.Router();



const options = {
	method:"POST",
	url: "https://accounts.spotify.com/api/token",
	headers: {
      'Authorization': 'Basic ' + (new Buffer(credos.client_id + ':' + credos.client_secret).toString('base64'))
    },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
}


router.get('/spotify/:artist', function(req, res){
	artist = req.params.artist;
	artist = artist.slice(1, artist.length);
	console.log(artist);
	request(options, function(error, responce, body){
		var token = body.access_token;
		var options = {
      url: 'https://api.spotify.com/v1/search?q='+artist+'&type=artist',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
     res.json(body);
		});
	});
})




module.exports = router;



