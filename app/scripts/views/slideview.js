define(['backbone'],function(Backbone){
	var slidesview = Backbone.View.extend({
		tagName:'ul',
		initialize:function(){
			this.render();
			$('body').append(this.el);
		},

		render:function(){
			this.collection.each(function(model){
			  this.$el.append(new slideview({model:model}).el);
			},this);
			return this;
		}
	});

	var slideview = Backbone.View.extend({
		tagName:'li',
		initialize:function(){
		 this.render();
		},

		render:function(){
			this.$el.html(_.template("<%= title %>")(this.model.toJSON()))
			return this;
		}
	});

	return {
		slidesview:slidesview,
		slideview:slideview
	}
});