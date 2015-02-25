window.Containership.Collections.Applications = Backbone.Collection.extend({
    model: Containership.Models.Application,
    url: ["http://", window.location.hostname, ":8080/v1/applications"].join(""),
    parse: function(response){
        return _.values(response);
    }
});
