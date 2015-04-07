var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;


	var query = {'assignment': 'hw6'};

	
	db.collection('grades').findOne(query, function(err, doc){
		if (err) throw err;

		doc['date_returned'] = new Date();

		//Same as upsert
		db.collection('grades').save(doc, function(err, saved){
			if (err) throw err;

			console.log("Successfully saved " + saved + " document");

			return db.close();
		});

	});

});