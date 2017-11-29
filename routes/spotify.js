var express =	require('express');
const http =	require('http');
var request = require('request');
var qs = require('querystring');
const credos = require('./credentials');
var token

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

function getToken(t){ 
	token = t; // token is here
};


router.get('/spotify/:artist', function(req, res){
	artist = req.params.artist;
	artist = artist.slice(1, artist.length);
	request(options, function(error, responce, body){
		getToken(body.access_token);
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




router.post('/spotify/details', function(req, res){
		var options = {
			url:'',
			headers:{'Authorization': 'Bearer ' + token},
			json:true
		}
	console.log(req.body.artist_id);
	if(req.body.artist_id){
		options.url = 'https://api.spotify.com/v1/artists/' + req.body.artist_id + '/albums';
		request.get(options, function(error, responce, body){
			res.json(body);
		})
	}else if (req.body.album_id){
		options.url = 'https://api.spotify.com/v1/albums/' + req.body.album_id + '/tracks';
		request.get(options, function(error, responce, body){
			res.json(body);
		})
	}
})


module.exports = router;



