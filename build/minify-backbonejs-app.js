var requirejs = require("requirejs"),

conf = {
    "baseUrl": "../client",
    "name": "backbonejs-router",
    "out": "../out/js/backbonejs-sample.min.js",
    "include": ["custom-modernizr", "foundation", "foundation-topbar", "backbonejs-mainView", "backbonejs-page1aView", "backbonejs-page2aView"],
    "paths": {
        "text": "js/lib/require-text-2.0.5",
        "foundation": "js/lib/foundation",
        "foundation-topbar": "js/lib/foundation.topbar",
        "custom-modernizr": "js/lib/custom.modernizr",

        "backbonejs-router": "js/backbonejs/Router",
        "backbonejs-mainView": "js/backbonejs/view/MainView",
        "backbonejs-page1aView": "js/backbonejs/view/Page1aView",
        "backbonejs-page1bView": "js/backbonejs/view/Page1bView",
        "backbonejs-page2aView": "js/backbonejs/view/Page2aView",
        "backbonejs-articles": "js/backbonejs/model/Articles",
        "backbonejs-article": "js/backbonejs/model/Article"
    },
    "shim": {
        "foundation": {"deps": ["custom-modernizr"]},
        "foundation-topbar": {"deps": ["foundation"]}
    },
    "stubModules": ["text"],
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

console.log("backbonejs sample optimization in progress...");
requirejs.optimize(conf, function(buildResponse) {
    console.log("done");
}, function(err) {
    console.log("error: " + err);
});