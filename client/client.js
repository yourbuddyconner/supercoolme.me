
Meteor.subscribe("Memes");


function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

Template.memes.helpers({
	swag: function() {
		try{
			count = Memes.find().count();
			rand = getRandomArbitrary(1,count);
			myMeme = Memes.find().fetch()[rand];
			console.log(rand);
			return myMeme.link;
		}
        catch (e){
        	console.log(e);
        	return "yolo.png"
        }
        
    }
});
