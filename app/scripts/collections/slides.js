define(['backbone','models/slide'], function (Backbone,Slidemodel) {
	var Slides = Backbone.Collection.extend({
		model:Slidemodel,
		initialize:function(){
		}
	});

	return Slides;
});