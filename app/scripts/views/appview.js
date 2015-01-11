define(['backbone',
    'collections/slides',
    'views/slideview',
    'router'
], function(Backbone, slidecollections, slideviews, router) {
    var app = Backbone.View.extend({
        el: $('body'),

        events:{
            'keyup':'changeSlide'
        },

        initialize: function() {
            this.data();
            this.render();
            App.router = new router();
            Backbone.history.start();
        },

        data: function() {
            this.collection = new slidecollections([{
                title: 'Backbone js is awesome'
            }, {
                title: 'underscore js is awesome'
            }, {
                title: 'jquery js is awesome'
            }, {
                title: 'require js is awesome'
            }]);
        },

        render: function() {
            //this.$el.append(new slideviews.slidesview({collection:this.collection}).el);
            new slideviews.slidesview({
                collection: this.collection
            });
            return this;
        },

        changeSlide:function(e){
            //37 -left
            //39-right
            if(e.which === 37 || e.which === 39){
                App.vent.trigger('changeslide',{
                    direction:e.which === 39 ? 'next':'prev'
                });
            }
        }
    });

    return app;
});