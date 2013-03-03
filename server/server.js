/**
 * @license JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
var express = require("express"), libs = require("./libs"), app = express(),
api = require("./api");

app.configure(
    function () {
        app.use(express.logger({ format: ":method :url" }));
        app.use("/dev", express.static("../client"));
        app.use("/", express.static("../out"));
        app.use(express.errorHandler({ dumpExceptions:true, showStack:true }));
    }
);

// index.html
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.set("views", "../client/html");

app.get("/dev/", function(req, res){
    res.render("dev");
});

app.get("/", function(req, res){
    res.render("index");
});

// 3rd party libs
libs.init(app);

// api
api.init(app);

app.listen(5000);
console.log("node server is listening on port 5000");