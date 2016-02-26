Meteor.startup(function () {
	if (Memes.find().count() == 0){
		HTTP.get( 'https://api.imgur.com/3/g/memes/viral/1', {'headers': {'Authorization': 'Client-ID 015ef732c09bb01'}}, function(error, response) {
			if (error){
				console.log(error);
			}
			else{
				response.data.data.forEach(function(value, index, ar){
					console.log(value)
					if (value.link.indexOf(".jpg") > -1){
						Memes.insert(value);
					
					}
				});
			}
			
		} );
	}
	else{
		console.log(Memes.findOne())
	}

	Meteor.publish("Memes", function () {
	  return Memes.find();
	});
});
