window.Containership.Models.Host = Backbone.Model.extend({

    initialize: function(){
        this.set("views", {
            list: new Containership.Views.HostList({model: this}),
            details: new Containership.Views.HostDetails({model: this}),
        });

        this.on("remove", function(){
            this.get("views").list.remove();
        });
    },

    toJSON: function(){
        var json = {
            id: this.get("id"),
            host_name: this.get("host_name"),
            mode: this.get("mode"),
            containers: this.get("containers")
        }

        return json;
    }

});
