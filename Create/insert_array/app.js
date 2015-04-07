var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;


	//Works on mongodb@1.4.x only
	var docs = [ {'student': 'Calvin', 'age': 6},
				{'student': 'Susie', 'age': 7} ];

	db.collection('students').insert(docs, function(err, inserted){
		if (err) throw err;

		console.log("Successfully inserted: " + JSON.stringify(inserted));

		return db.close();
	});

	

});