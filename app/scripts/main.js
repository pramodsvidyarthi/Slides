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

require(['views/appview'],function (appview) {
      new appview;
});