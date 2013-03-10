var requirejs = require("requirejs"),

conf = {
    "baseUrl": "../client",
    "name": "canjs-router",
    "out": "../out/js/canjs-sample.min.js",
    "include": ["canjs", "canjs-mainView", "canjs-page1aView", "canjs-page2aView"],
    "paths": {
        "canjs": "js/lib/can.custom",
        "text": "js/lib/require-text-2.0.5",

        "canjs-router": "js/canjs/Router",
        "canjs-mainView": "js/canjs/view/MainView",
        "canjs-page1aView": "js/canjs/view/Page1aView",
        "canjs-page1bView": "js/canjs/view/Page1bView",
        "canjs-page2aView": "js/canjs/view/Page2aView",
        "canjs-articles": "js/canjs/model/Articles",
        "canjs-article": "js/canjs/model/Article"
    },
    "shim": {
        "canjs-mainView": {"deps": ["canjs"]},
        "canjs-page1aView": {"deps": ["canjs"]},
        "canjs-page2aView": {"deps": ["canjs"]}
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
    "preserveLicenseComments": false,
    "logLevel": 0
};

console.log("canjs sample optimization in progress...");
requirejs.optimize(conf, function(buildResponse) {
    console.log("done");
}, function(err) {
    console.log("error: " + err);
});