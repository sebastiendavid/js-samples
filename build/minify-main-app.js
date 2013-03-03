var requirejs = require("requirejs"),

conf = {
    "baseUrl": "../client",
    "name": "main",
    "out": "../out/js/js-samples.min.js",
    "include": ["requirejs", "jquery", "moment", "underscore", "backbone", "handlebars", "less"],
    "exclude": ["backbonejs-router"],
    "paths": {
        "requirejs": "js/lib/require-2.1.4",
        "jquery": "js/lib/jquery-1.9.1",
        "moment": "js/lib/moment-2.0.0",
        "underscore": "js/lib/underscore-1.4.4",
        "less": "js/less",
        "backbone": "js/lib/backbone-0.9.10",
        "handlebars": "js/lib/handlebars-1.0.0.rc3",
        "text": "js/lib/require-text-2.0.5",
        "foundation": "js/lib/foundation",
        "foundation-topbar": "js/lib/foundation.topbar",
        "custom-modernizr": "js/lib/custom.modernizr",

        "main": "js/main",

        "backbonejs-router": "js/backbonejs/Router",
        "backbonejs-mainView": "js/backbonejs/view/MainView",
        "backbonejs-page1aView": "js/backbonejs/view/Page1aView",
        "backbonejs-page1bView": "js/backbonejs/view/Page1bView",
        "backbonejs-page2aView": "js/backbonejs/view/Page2aView",
        "backbonejs-articles": "js/backbonejs/model/Articles",
        "backbonejs-article": "js/backbonejs/model/Article"
    },
    "shim": {
        "jquery": {"deps": ["require"]},
        "moment": {"deps": ["require"]},
        "less": {"deps": ["require"]},
        "backbone": {"deps": ["underscore", "jquery"], "exports": "Backbone"},
        "handlebars": {"deps": ["require"], "exports": "Handlebars"},
        "underscore": {"deps": ["require"], "exports": "_"}
    },
    "inlineText": true,
    "skipModuleInsertion": false,
    "optimizeCss": "none",
    "optimize": "uglify2",
    "uglify2": {
        //"output": {beautify: true}
    },
    "findNestedDependencies": true,
    "optimizeAllPluginResources": true,
    "logLevel": 0
};

console.log("main app sample optimization in progress...");
requirejs.optimize(conf, function(buildResponse) {
    console.log("done");
}, function(err) {
    console.log("error: " + err);
});