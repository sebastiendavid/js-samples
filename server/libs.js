/**
 * @license JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
var http = require("http");
var https = require("https");

exports.init = function(app) {

    var sendLib = function(response, host, path, opt){
        var options = {
            host: host,
            port: opt.https ? 443 : 80,
            path: path,
            method: "GET"
        };

        var fileData = "", web = opt.https ? https : http;
        var request = web.request(options, function(res) {
            console.log("GET "+res.statusCode+" "+options.host+options.path);
            res.setEncoding("utf8");
            res.on("data", function(chunk){
                fileData+=chunk;
            });

            res.on("end", function() {
                response.type(res.headers["content-type"] || "application/javascript");
                response.send(fileData);
            });

            res.on("error", function(e) {
                response.send(res.statusCode, e.message);
            });
        });

        request.on("error", function(e) {
            console.log("problem with request: " + e.message);
            response.send(500, e.message);
        });

        request.end();
    }

    app.get("/libs/:cdn/:lib/:version/:file", function(req, resp){
        var host, path, opt = {};
        switch(req.params.cdn) {
            case "google":
                host =  "ajax.googleapis.com";
                path = "/ajax/libs/"+req.params.lib+"/"+req.params.version+"/"+req.params.file;
                break;
            case "requirejs":
                host = "requirejs.org";
                var min = (req.query.min && req.query.min == "false") ? false : true;
                path = "/docs/release/"+req.params.version+"/"+(min ? "minified" : "comments")+"/"+req.params.file;
                break;
            case "cdnjs":
                host = "cdnjs.cloudflare.com";
                path = "/ajax/libs/"+req.params.lib+"/"+req.params.version+"/"+req.params.file;
                break;
            case "github":
                host = "raw.github.com";
                path = "/"+req.params.lib+"/"+req.query.plugin+"/"+req.params.version+"/"+req.params.file;
                opt.https = true;
                break;
        }
        sendLib(resp, host, path, opt);
    });
}