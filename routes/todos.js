// Uncomment on server
// var express = require('../lib/node_modules/express');
// var path = require('../lib/node_modules/path');
// var router = express.Router();
// var mongojs = require('../lib/node_modules/mongojs');



var express = require('express');
var path = require('path')
var router = express.Router();
var mongojs = require('mongojs')
//mongodb://<dbuser>:<dbpassword>@ds259255.mlab.com:59255/nicks_mean_todos
var db = mongojs('mongodb://nick:300987@ds259255.mlab.com:59255/nicks_mean_todos', ['todos'])


router.get('/todos', function(req, res, next){
	db.todos.find(function(err, todos){
		if (err) {
			res.send(err)
		}else{
			res.json(todos);
		}
	})
})

router.get('/todos/:id', function(req, res, next){
	db.todos.findOne({
		_id: mongojs.ObjectId(req.params.id)
	},function(err, todos){
		if (err) {
			res.send(err)
		}else{
			res.json(todos);
		}
	})
})
// save a todo

router.post('/todo', function(req, res, next) {
	var todo = req.body;
	if(!todo.text || !(todo.isCompleted + '')){
		res.status(400);
		res.json({
			"error" : "Invalid data"
		})
	}else{
		db.todos.save(todo, function(error, result) {	
			if (error) {
				res.send(error);
			}else{
				res.json(result); 
			}
		});
	}
});

// update a todo

router.put('/todo/:id', function(req, res, next) {
	var todo = req.body;
	var updObj = {};

	if(todo.isCompleted){
		updObj.isCompleted = todo.isCompleted
	}

	if(todo.text){
		updObj.text = todo.text;
	}

	if(!updObj){
		re.status(400);
		res.json({
			"error": "Invalid Data"
		});
	}else{
		db.todos.update({
			_id: mongojs.ObjectId(req.params.id)
		},updObj, {}, function(err, result){
			if (err) {
				res.send(err);
			}else{
				res.json(result); 
			}
		});
	}
});

// delte
router.delete('/todo/:id', function(req, res, next) {
	db.todos.remove({
		_id: mongojs.ObjectId(req.params.id)
	},'', function(err, result){
		if (err) {
			res.send(err);
		}else{
			res.json(result); 
		}
	});
});

module.exports = router;