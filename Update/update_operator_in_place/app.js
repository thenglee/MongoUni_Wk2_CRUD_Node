var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;


	var query = {'assignment': 'hw1'};

	//operator will set the 'date_returned' field regardless of whether it was created or not
	var operator = {'$set': {'date_returned': new Date()} }

	//In place update one document matching the query
	db.collection('grades').update(query, operator, function(err, updated){
		if (err) throw err;

		console.log("Successfully updated " + updated + " document!");

		return db.close();
	});

});