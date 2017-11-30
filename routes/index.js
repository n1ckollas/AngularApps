// Uncomment on server
// const express = require('./lib/node_modules/express');
// const path = require('./lib/node_modules/path');

var express = require('express');
var path = require('path')
var router = express.Router();
indexHtml = '/home/n1cko/angular/ngapps/dist/index.html';
router.get('*', function(req, res, next){
	res.sendFile(indexHtml);
})

module.exports = router;
