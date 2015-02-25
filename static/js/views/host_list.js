Containership.Views.HostList = Backbone.View.extend({

    tagName: "tr",

    events: {
        "click": "host_details"
    },

    initialize: function(){
        $(this.el).css("cursor", "pointer");
    },

    render: function(){
        if(this.model.get("mode") == "follower"){
            var content = [
                '<td>', this.model.get("id"), '</td>',
                '<td>', this.model.get("host_name"), '</td>',
                '<td>', this.model.get("address").public, '</td>',
                '<td>', this.model.get("address").private, '</td>',
                '<td>', this.model.get("containers").length, '</td>',
                '<td>', new Date(this.model.get("start_time")), '</td>'
            ]

            $(this.el).html(content.join(""));
            $("#followerHostList tbody").append(this.el);
        }else{
            var content = [
                '<td>', this.model.get("id"), '</td>',
                '<td>', this.model.get("host_name"), '</td>',
                '<td>', this.model.get("address").public, '</td>',
                '<td>', this.model.get("address").private, '</td>',
                '<td>', new Date(this.model.get("start_time")), '</td>'
            ]

            $(this.el).html(content.join(""));
            $("#leaderHostList tbody").append(this.el);
        }
    },

    host_details: function(){
        window.location = ["", "#", "hosts", this.model.get("id")].join("/");
    },

    remove: function(){
        $(this.el).remove();
    }

});
