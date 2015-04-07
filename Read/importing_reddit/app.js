var MongoClient = require('mongodb').MongoClient,
	request = require('request');

MongoClient.connect('mongodb://localhost:27017/course', function(err, db){
	if (err) throw err;

	request('http://www.reddit.com/r/technology/.json', function(err, response, body){

		if (!err && response.statusCode == 200){
			var obj = JSON.parse(body);

			//map the children array 
			var stories = obj.data.children.map(function(story){
				return story.data;
			});

			db.collection('reddit').insert(stories, function(err, data){
				if (err) throw err;

				console.log(data);

				db.close();
			});
		}

	});


});