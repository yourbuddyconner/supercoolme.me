
Meteor.startup(function () {
	Meteor.subscribe("Memes");

	
	

	Deps.autorun(function () {
		myMeme = Memes.findOne();
		try {
			console.log(myMeme.link);
		  	Template.memes.helpers({
				swag: function() {
					return myMeme.link;
    			}
			});
			
		} catch (e) {
			Template.memes.helpers({
				swag: function() {
					return "yolo";
    			}
			});
		  	console.log(Template.memes);
		}
  		
	});
	
});