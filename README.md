js-samples
==========

>___DEPRECATED, now I prefer this developement environement with NodeJS and AngularJS: https://github.com/sebastiendavid/ui-project-sample#ui-project-sample___

js-samples is a group of simple examples to show how I implement some javascript libraries, and how I optimize them for a production context.

* [Available samples](#available-samples)
* [Next samples](#next-samples)
* [Requirements](#requirements)
* [Start the NodeJS server](#start-the-nodejs-server)
* [Optimize the samples](#optimize-the-samples)
* [Display the samples in a web browser](#display-the-samples-in-a-web-browser)
* [3rd party libraries](#3rd-party-libraries)

### Available samples

* RequireJS + BackboneJS

### Next samples

___Work in progress...___

* RequireJS + CanJS
* AngularJS

### Requirements

* [NodeJS](http://nodejs.org)

## Start the NodeJS server

__Context: in the js-samples folder with a terminal__

For linux or mac:
```
cd server
sh start.sh
```

For windows:
```
cd server
npm install express
npm install hbs
node server.js
```

## Optimize the samples

__Context: in the js-samples folder with a terminal__

For linux or mac:
```
cd build
sh build.sh
```

For windows:
```
cd server
npm install requirejs
npm install less
node minify-main-app.js
node minify-backbonejs-app.js
```

## Display the samples in a web browser

The NodeJS server is configured to listen the port 5000

__Context: in a modern web browser please...__

For dev mode:
```
http://localhost:5000/dev/?app=backbonejs
http://localhost:5000/dev/?app=canjs
```

For optimized mode:
```
http://localhost:5000/?app=backbonejs
http://localhost:5000/?app=canjs
```

For logs add __log=true__, for example:
```
http://localhost:5000/dev/?app=backbonejs&log=true
```

## 3rd party libraries

___Thanks to those great libraries:___

* [Angular](http://angularjs.org/)
* [Backbone](http://backbonejs.org/)
* [CanJS](http://canjs.us/)
* [Foundation](http://foundation.zurb.com/)
* [Handlebars](http://handlebarsjs.com/)
* [JQuery](http://jquery.com/)
* [Less](http://lesscss.org/)
* [Modernizr](http://modernizr.com/)
* [Moment](http://momentjs.com/)
* [Normalize](http://necolas.github.com/normalize.css/)
* [Require](http://requirejs.org/)
* [Underscore](http://underscorejs.org/)
