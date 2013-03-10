var requirejs = require("requirejs"),

conf = {
    "baseUrl": "../client",
    "name": "main",
    "out": "../out/js/js-samples.min.js",
    "include": ["requireLib", "jquery", "moment", "handlebars", "less", "custom-modernizr", "foundation", "foundation-topbar"],
    "exclude": ["backbonejs-router", "canjs-router"],
    "paths": {
        "requireLib": "js/lib/require-2.1.5",
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
        "canjs": "js/lib/can.custom",

        "main": "js/main",

        "backbonejs-router": "js/backbonejs/Router",
        "backbonejs-mainView": "js/backbonejs/view/MainView",
        "backbonejs-page1aView": "js/backbonejs/view/Page1aView",
        "backbonejs-page1bView": "js/backbonejs/view/Page1bView",
        "backbonejs-page2aView": "js/backbonejs/view/Page2aView",
        "backbonejs-articles": "js/backbonejs/model/Articles",
        "backbonejs-article": "js/backbonejs/model/Article",

        "canjs-router": "js/canjs/Router",
        "canjs-mainView": "js/canjs/view/MainView",
        "canjs-page1aView": "js/canjs/view/Page1aView",
        "canjs-page1bView": "js/canjs/view/Page1bView",
        "canjs-page2aView": "js/canjs/view/Page2aView",
        "canjs-articles": "js/canjs/model/Articles",
        "canjs-article": "js/canjs/model/Article"
    },
    "shim": {
        "jquery": {"deps": ["requireLib"]},
        "moment": {"deps": ["requireLib"]},
        "less": {"deps": ["requireLib"]},
        "handlebars": {"deps": ["requireLib"]},
        "custom-modernizr": {"deps": ["jquery"]},
        "foundation": {"deps": ["custom-modernizr"]},
        "foundation-topbar": {"deps": ["foundation"]},
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
    "preserveLicenseComments": false,
    "logLevel": 0
};

console.log("main app sample optimization in progress...");
requirejs.optimize(conf, function(buildResponse) {
    console.log("done");
}, function(err) {
    console.log("error: " + err);
});