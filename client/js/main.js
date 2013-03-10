/**
 * JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
requirejs.config(window.requirejsConfig);
require(["jquery", "moment", "handlebars", "less", "custom-modernizr", "foundation", "foundation-topbar"], 
    function(BackboneJsRouter, CanJsRouter) {

        if(console && typeof console.log === "function") {
            window.log = function(text) {
                if(window.logEnabled === true) {
                    console.log(moment().format('MMMM Do YYYY, h:mm:ss a: ') + text);
                }
            };
        } else {
            window.log = function(){};
        }

        queryParams = function(paramName) {
            if(!this.params) {
                var searchSplit = window.location.search.substr(1).split('&');
                if(searchSplit == "") {
                    return {};
                }
                var params = {}, i = 0, length = searchSplit.length, param;
                for (; i < length; ++i) {
                    param = searchSplit[i].split('=');
                    if(param.length > 1) {
                        params[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
                    }
                }
                this.params = params;
            }
            return this.params[paramName];
        },

        initBackboneJsApp = function() {
            log("load BackboneJS app");
            require(["backbonejs-router"], function(BackboneJsRouter) {
                new BackboneJsRouter();
            });
        },

        initCanJsApp = function() {
            log("load CanJS app");
            require(["canjs-router"], function(CanJsRouter) {
                new CanJsRouter();
            });
        };

        window.logEnabled = queryParams("log") === "true";

        switch(queryParams("app")) {
            case "canjs":
                initCanJsApp();
                break;
            case "backbonejs":
            default:
                initBackboneJsApp();
        }
    }
);
