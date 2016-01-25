define(['backbone'], function(Backbone) {
        var slidesview = Backbone.View.extend({
                // tagName:'div',
                // className:'slides',   //can be done either this way or having an element cald slides in the html.
                el: $('.slides'),
                initialize: function() {
                    this.currentslideIndex = 1;
                    this.slidenum = this.collection.length;
                    this.renderAll();
                    App.vent.on('init', this.hideAllButFirst, this);
                    App.vent.on('changeslide', this.changeSlide, this);
                },

                hideAllButFirst: function() {
                    this.$el.children(':nth-child(n+2)').hide();
                },

                changeSlide: function(opts) {
                    //router gives index as a string convert to number using parseInt or prefixing ~~
                    this.setslideIndex(opts);
                    var slides = this.$el.children();
                    var nextslide = this.getNextslide(slides);

                    //pass 3 parameters i.e alltheslides, thenewslide (or) nextslide to which it has to animate and the direction.
                    this.animatetonewSlide(slides, nextslide, opts.direction);
                    App.router.navigate('/slides/' + this.currentslideIndex);
                },

                animatetonewSlide: function(alltheslides, newslide, direction) {
                    var self = this;
                     alltheslides.filter(':visible') //find the one that is visible
                     .stop()
                     .animate({
                        //animate by sending to bottom or bring from top (or) left
                        'left': direction === 'next' ? '100%' : '-100%',
                        'opacity': 'hide'
                    }, 400, function() {
                        //after animating setting it back to 0.
                        $(this).css('left', '0');
                        newslide.css('left', direction === 'next' ? '-100%' : '100%')
                            .stop()
                            .animate({
                                'left': '0',
                                'opacity': 'show'
                            }, 400, function() {
                                $(this).css('left', '0');
                            })
                    });
                    },

                    getNextslide: function(slides) {
                        return slides.eq(this.currentslideIndex - 1);
                    },

                    setslideIndex: function(opts) {
                        if (opts.slideindex) {
                            return this.currentslideIndex = ~~opts.slideindex;
                        }
                        this.currentslideIndex += opts.direction === 'next' ? 1 : -1;
                        if (this.currentslideIndex > this.slidenum) {
                            this.currentslideIndex = 1
                        }

                        if (this.currentslideIndex <= 0) {
                            this.currentslideIndex = this.slidenum;
                        }
                    },

                    renderAll: function() {
                        this.$el.empty();
                        this.collection.each(function(model) {
                            this.render(model);
                        }, this);
                    },

                    render: function(model) {
                        this.$el.append(new slideview({
                            model: model
                        }).el);
                        return this;
                    }
                });

            var slideview = Backbone.View.extend({
                tagName: 'div',
                className: 'slide',
                titleTemplate: _.template("<h1 class='<%= size %>'> <%= title %> </h1>"),
                imageTemplate: _.template("<img class='img' src='<%= image %>' alt='no preview' />"),
                bulletTemplate: _.template("<h3 class='medium'> <%= title %> </h3><ul class = 'bullets'><% bullets.forEach(function (name, index){ %> <li> <%= name %> </li> <% }) %></ul>"),

                initialize: function() {
                    this.render();
                },

                render: function() {
                    if (this.model.get('bullets')) {
                        this.renderBullets();
                    } else if (this.model.get('image')) {
                        this.renderImage();
                    } else {
                        this.$el.html(this.titleTemplate(this.model.toJSON()));
                    }
                    return this;
                },

                renderBullets: function() {
                    this.$el.append(this.bulletTemplate(this.model.toJSON()));
                },

                renderImage: function() {
                    this.$el.html(this.imageTemplate(this.model.toJSON()));
                }
            });

            return {
                slidesview: slidesview,
                slideview: slideview
            }
        });
