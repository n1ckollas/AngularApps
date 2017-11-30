// Uncomment on server
// const express = require('./lib/node_modules/express');
// const bodyParser = require('./lib/node_modules/body-parser');
// const path = require('./lib/node_modules/path');
// var http = require('http');


var express 		=	require('express');
var bodyParser 	=	require('body-parser');
var path 				=	require('path');


var index 			=	require('./routes/index');
var todos 			=	require('./routes/todos');
var spotify 		=	require('./routes/spotify');

var app = express();
  //view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/v1/', todos);
app.use('/api/v2/', spotify);
app.use('*', index);

app.listen(3000, function(){
 console.log('server started on port 3000...');
});
 





// const express = require('./lib/node_modules/express');
// const bodyParser = require('./lib/node_modules/body-parser');
// const path = require('./lib/node_modules/path');
// var http = require('http');

// const app = express();
// //28404
// var index = require('./routes/index');
// var todos = require('./routes/todos');

// //view engine
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname, 'routes/dist')));

// app.use('/api/v1/', todos);
// app.use('*', index);

// const port = process.env.PORT || 14698;

// app.listen(14698);
