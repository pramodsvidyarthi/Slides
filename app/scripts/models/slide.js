define(['backbone'], function (Backbone) {
	var Slide = Backbone.Model.extend({
		defaults:{
			title:'',
			type:''
		}
	});

	return Slide;
});