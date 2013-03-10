/**
 * JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
define(["backbonejs-mainView", "backbonejs-page1aView", "backbonejs-page2aView", "underscore", "backbone"], 
    function(MainView, Page1, Page2) {
        return Backbone.Router.extend({
            "routes": {
                "page1": "goToPage1",
                "page2": "goToPage2",
                "*path": "goToDefault"
            },
            "initialize": function(globals) {
                log('init router');
                this.globals = globals ? globals : {};
                new MainView(this.globals).render();
                this.$loader = $(document.getElementById("loader"));
                $(document).foundation();
                Backbone.history.start();
            },
            "goToPage1": function() {
                log("go to page1");
                this.clear();
                this.page1 = new Page1(this.globals);
                this.page1.render();
                if(!this.$page1Link) {
                    this.$page1Link = $(document.getElementById("page1-link"))
                }
                this.$page1Link.addClass("active");
                this.removeLoader();
            },
            "goToPage2": function() {
                log("go to page2");
                this.clear();
                this.page2 = new Page2(this.globals);
                this.page2.render();
                if(!this.$page2Link) {
                    this.$page2Link = $(document.getElementById("page2-link"))
                }
                this.$page2Link.addClass("active");
                this.removeLoader();
            },
            "goToDefault": function() {
                this.goTo("page1");
            },
            "goTo": function(token) {
                this.navigate(token, {"trigger": true, "replace": true});
            },
            "clear": function() {
                if(this.page1) {
                    this.page1.clear();
                }
                if(this.page2) {
                    this.page2.clear();
                }
                $(document.getElementById("sections")).find(".active").removeClass("active");
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
            }
        }
    );
});