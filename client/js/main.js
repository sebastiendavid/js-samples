/**
 * @license JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
requirejs.config(window.requirejsConfig);
require(["backbonejs-router", "jquery", "moment", "underscore", "backbone", "handlebars", "less"], 
    function(BackboneJsRouter) {
        new BackboneJsRouter();
    }
);
