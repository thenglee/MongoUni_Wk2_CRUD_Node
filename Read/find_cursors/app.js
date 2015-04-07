var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;

	var query = {'grade': 100};

	//Assign cursor, call is synchronous, just return cursor rather than taking a callback
	//Just creating a cursor object, not performing the query
	var cursor = db.collection('grades').find(query);


	cursor.each(function(err, doc){
		if (err) throw err;

		if (doc == null){
			return db.close();
		}

		console.log(doc.student + " got a good grade!");
		
	});

});