define(['backbone'],function(Backbone){
	var slidesview = Backbone.View.extend({
		// tagName:'div',
		// className:'slides',   //can be done either this way or having an element cald slides in the html.
		el:$('.slides'),
		initialize:function(){
			this.renderAll();
		},

		renderAll:function(){
			this.$el.empty();
			this.collection.each(function(model){
			  this.render(model);
			},this);
		},

		render:function(model){
			this.$el.append(new slideview({model:model}).el);
			return this;
		}
	});

	var slideview = Backbone.View.extend({
		tagName:'div',
		className:'slide',
		initialize:function(){
		 this.render();
		},

		render:function(){
			this.$el.html(_.template("<h1> <%= title %> </h1>")(this.model.toJSON()))
			return this;
		}
	});

	return {
		slidesview:slidesview,
		slideview:slideview
	}
});