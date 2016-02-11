var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());//hace leible los datos para agregar

app.get('/contactlist', function(req, res){

	console.log("get request");

	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});

	/*person1 = {name: 'Tim',email: "tim@tim.com",number: "(11) 111-1111"};

	person2 = {name: 'Emi',email: "emi@emi.com",number: "(22) 222-2222"};

	person3 = {name: 'erick',email: "erick@ercik.com",number: "(33) 333-3333"};

    var contactList = [person1, person2, person3];

    res.json(contactList);*/

});

app.post('/contactlist', function(req, res){

	console.log(req.body);

	db.contactlist.insert(req.body, function(err,docs){
		res.json(docs);
	});

});

app.delete('/contactlist/:id', function(req, res){

	var id = req.params.id;

	console.log(id);

	db.contactlist.remove({_id: mongojs.ObjectId(id)} , function(err,docs){
		res.json(docs);
	});

});

var port = Number(process.env.PORT || 3000);

app.listen(port);

console.log("server running 3000");