define(['backbone'], function(Backbone) {
	var router = Backbone.Router.extend({
		routes:{
			'':'home',
			'slides/:id':'showslide'
		},

		showslide:function(slideindex){
			App.vent.trigger('changeslide',{
				slideindex:slideindex,
				direction:'next'
			});
		},

		home:function(){
			App.vent.trigger('init');
		}
	});

	return router;
});