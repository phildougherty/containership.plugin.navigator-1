var _ = require("lodash");
var fs = require("fs");
var express = require("express");
var hbs = require("hbs");
var body_parser = require("body-parser");
var middleware = require([__dirname, "middleware"].join("/"));

function Server(core){
//    this.options = options;
    this.server = express();

    this.server.use(body_parser.json());
    this.server.disable("x-powered-by");

    this.server.set("views", [__dirname, "..", "views"].join("/"));
    this.server.set("view engine", "hbs");
    hbs.registerPartials([__dirname, "..", "views", "partials"].join("/"));

    // set required pre-operation middleware
    this.server.use(middleware.init_response);
    this.server.use(middleware.json_request);

    // register the routes
    var routes = require([__dirname, "..", "routes"].join("/"));
    routes.register(this.server, core);

    // static assets
    this.server.use(express.static([__dirname, "..", "static"].join("/")));

    // set required post-operation middleware
    this.server.use(middleware.handle_response);
}

Server.prototype.listen = function(){
    this.listener = this.server.listen(8081, "0.0.0.0");
}

Server.prototype.exit = function(){
    this.listener.close();
}

module.exports = Server;
