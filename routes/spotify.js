var express =	require('express');
const https =	require('https');
var request = require('request');
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

function callback(error, response, body) {
	console.log("error:",error);
	console.log("Responce",response);
	console.log("body",body);
}

router.get('/spotify', function(req, res){
	res.send({'hello':'world'});
})

// request(options, callback);



module.exports = router;



