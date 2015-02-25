Containership.Views.ApplicationList = Backbone.View.extend({

    tagName: "tr",

    events: {
        "click": "application_details"
    },

    initialize: function(){
        $(this.el).css("cursor", "pointer");
    },

    render: function(){
        var containers = this.model.get("containers");
        var unloaded_containers = _.filter(containers, function(container){
            return container.status == "unloaded"
        });

        var content = [
            '<td>', this.model.get("id"), '</td>',
            '<td>', this.model.get("engine"), '</td>',
            '<td>', this.model.get("image"), '</td>',
            '<td>', this.model.get("command"), '</td>',
            '<td>', this.model.get("cpus"), '</td>',
            '<td>', this.model.get("memory"), 'MB', '</td>',
            '<td>', (containers.length - unloaded_containers.length), ' / ', containers.length, '</td>',
        ]

        $(this.el).html(content.join(""));
        $("#applicationList tbody").append(this.el);
    },

    application_details: function(){
        window.location = ["", "#", "applications", this.model.get("id")].join("/");
    },

    remove: function(){
        $(this.el).remove();
    }

});
