require.config({
	paths:{
		'jquery':'../../bower_components/jquery/dist/jquery',
		'backbone':'../../bower_components/backbone/backbone',
		'underscore':'../../bower_components/underscore/underscore'
	},
	shim:{
		'backbone':{
			'deps':['jquery','underscore'],
			'exports':'Backbone'	
		}
	}
});	

require(['collections/slides','views/slideview'],function (slidecollection, slideviews) {
		var a = new slidecollection([{
			title:'Backbone js is awesome'
		},{
			title:'underscore js is awesome'
		},{
			title:'jquery js is awesome'
		},{
			title:'require js is awesome'
		}]);
		new slideviews.slidesview({collection:a});
});