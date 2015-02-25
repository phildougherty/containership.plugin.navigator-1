window.Containership.Models.Application = Backbone.Model.extend({

    initialize: function(){
        this.set("views", {
            list: new Containership.Views.ApplicationList({model: this}),
            details: new Containership.Views.ApplicationDetails({model: this}),
            modal: new Containership.Views.NewApplicationModal({model: this})
        });

        this.on("remove", function(){
            this.get("views").list.remove();
            this.get("views").details.remove();
            this.get("views").modal.remove();
        });
    },

    toJSON: function(){
        var json = {
            engine: "docker",
            image: this.get("image"),
            command: this.get("command"),
            cpus: this.get("cpus"),
            memory: this.get("memory"),
            container_port: this.get("container_port"),
            network_mode: this.get("network_mode")
        }

        return json;
    }

});
