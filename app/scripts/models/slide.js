define(['backbone'], function(Backbone) {
    var Slide = Backbone.Model.extend({
        defaults: {
            title: '',
            type: ''
        },

        initialize: function() {
            this.setsize();
        },

        setsize: function() {
            var len = this.get('title').length;
            if (len > 200) {
                this.set('size', 'x-large');
            } else if (len > 100 && len < 200) {
                this.set('size', 'large');
            } else if (len > 50 && len < 100) {
                this.set('size', 'medium');
            } else {
                this.set('size', 'normal');
            }
        }
    });

    return Slide;
});