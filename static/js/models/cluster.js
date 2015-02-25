window.Containership.Models.Cluster = Backbone.Model.extend({

    initialize: function(){
        this.set("views", {
            dashboard: new Containership.Views.DashboardView({model: this}),
        });

        this.on("remove", function(){
            this.get("views").dashboard.remove();
        });
    },

    url: ["http://", window.location.hostname, ":8080/v1/cluster"].join("")
});
