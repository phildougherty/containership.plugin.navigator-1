window.Containership.Collections.Hosts = Backbone.Collection.extend({
    model: Containership.Models.Host,
    url: ["http://", window.location.hostname, ":8080/v1/hosts"].join(""),
    parse: function(response){
        return _.values(response);
    }
});
