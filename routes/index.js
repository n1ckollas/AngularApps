//index html is served here

var express = require('express');
var path = require('path')
var router = express.Router();
indexHtml = '/home/n1cko/angular/ngapps/dist/index.html';
router.get('*', function(req, res, next){
	res.sendFile(indexHtml);
})

module.exports = router;
