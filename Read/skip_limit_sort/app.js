var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;

	var grades = db.collection('grades');

	/* 	Method One
		Works in mongodb 1.4.x only

	var cursor = grades.find();
	cursor.skip(1);
	cursor.limit(4);
	
	cursor.sort('grade', 1);
	//cursor.sort([['grade', 1],['student', -1]]); //sort grade first, then student

	*/

	//	Method Two
	//	Works in mongodb 1.4.x and after
	var options = { 'skip': 1,
					'limit': 4,
					'sort': [['grade',1],['student', -1]] };

	var cursor = grades.find({},{},options);


	cursor.each(function(err, doc){
		if (err) throw err;

		if (doc == null){
			return db.close();
		}

		console.log(doc);
	});


});