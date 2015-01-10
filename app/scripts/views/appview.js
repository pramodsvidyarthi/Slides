define(['backbone','collections/slides','views/slideview'], function(Backbone, slidecollections, slideviews){
    var app = Backbone.View.extend({
        el:$('body'),
        initialize:function(){
            this.collection = new slidecollections([{
            title:'Backbone js is awesome'
        },{
            title:'underscore js is awesome'
        },{
            title:'jquery js is awesome'
        },{
            title:'require js is awesome'
        }]);
         this.render();   
        },

        render:function(){
            //this.$el.append(new slideviews.slidesview({collection:this.collection}).el);
            new slideviews.slidesview({collection:this.collection})
            return this;
        }
    });

    return app;
});