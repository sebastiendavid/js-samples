/**
 * JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
define(["canjs-mainView", "canjs-page1aView", "canjs-page2aView", "canjs"], function(MainView, Page1View, Page2View) {

    var Router = can.Control({}, {
        "init": function() {
            log("init router");
            can.route.ready(false);
            this.globals = this.options.globals ? this.options.globals : {};
            this.mainView = new MainView(document.createElement('div'), {"globals": this.globals}).render();
            this.$loader = $(document.getElementById("loader"));
            $(document).foundation();
            this.removeLoader();
            can.route.ready(true);
        },
        "route": function() {
            log("route not available, go to default route");
            this.goToPage(1);
        },
        "page/:page route": function(data) {
            switch(true) {
                case data.page == 1:
                    this.loadPage1();
                    break;
                case data.page == 2:
                    this.loadPage2();
                    break;
                default:
                    log("page not available, go to default page");
                    this.goToPage(1);
            }
        },
        "removeLoader": function() {
            if(this.$loader) {
                var that = this, $mainView = $(document.getElementById("main-view"));
                $mainView.addClass("loaded");
                var timer = setTimeout(function() {
                    that.$loader.remove();
                    that.$loader = null;
                    $mainView.removeAttr("style");
                    clearTimeout(timer);
                }, 200);
            }
        },
        "goToPage": function(page) {
            can.route.attr({"page": page}, true);
        },
        "loadPage1": function() {
            log("go to page1");
            this.clear();
            this.page1 = new Page1View(document.createElement('div'), {
                "globals": this.globals,
                "$mainContainer": $(this.mainContainerElem())
            }).render();
            this.mainView.updateAppBar(1);
        },
        "loadPage2": function() {
            log("go to page2");
            this.clear();
            this.page2 = new Page2View(document.createElement('div'), {
                "globals": this.globals,
                "$mainContainer": $(this.mainContainerElem())
            }).render();
            this.mainView.updateAppBar(2);
        },
        "clear": function() {
            if(this.page1) {
                this.page1.clear();
            }
            this.page1 = null;
            if(this.page2) {
                this.page2.clear();
            }
            this.page2 = null;
        },
        "mainContainerElem": function() {
            if(!this.mainContainer) {
                this.mainContainer = document.getElementById("main-container");
            }
            return this.mainContainer;
        }
    });

    return Router;
});