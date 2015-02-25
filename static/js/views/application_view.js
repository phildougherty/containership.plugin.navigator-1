Containership.Views.ApplicationView = Backbone.View.extend({

    tagName: "div",

    events: {},

    initialize: function(){},

    render: function(){
        var content = []
        $(this.el).html(content.join(""));
        $("#main").html(this.el);
    }

});
