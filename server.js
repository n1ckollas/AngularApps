// this is server file for node.js 
var express 		=	require('express');
var path 				=	require('path');
var bodyParser 	=	require('body-parser');
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
 
