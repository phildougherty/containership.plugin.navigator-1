var ContainershipPlugin = require("containership.plugin");
var Server = require([__dirname, "lib", "server"].join("/"));
var server;

module.exports = new ContainershipPlugin({
    type: "core",

    initialize: function(core){
        server = new Server(core);
        server.listen();
    },

    reload: function(){
        server.exit();
    }
});
