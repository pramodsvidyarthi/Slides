define(['backbone','models/slide'], function (Backbone,Slidemodel) {
	var Slides = Backbone.Collection.extend({
		model:Slidemodel,
		initialize:function(){
			console.log('collection initialized');
		}
	});

	return Slides;
});