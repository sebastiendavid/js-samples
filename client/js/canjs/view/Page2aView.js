define(["text!html/page2.html", "canjs-articles"], function(html, Articles) {

    var Page2aView = can.Control({}, {
        "init": function() {
            this.$mainContainer = this.options.globals.$mainContainer;
            this.template = can.view.mustache($(html).find("#template-page2").html());
            this.loader = $(html).find("#template-page2-loader").html();
        },
        "render": function() {
            this.$mainContainer.html(this.loader);
            this.getArticles();
            return this;
        },
        "getArticles": function() {
            var that = this;
            Articles.findAll({}, 
                function(items) {
                    that.displayArticles(items);
                    that.removeLoader();
                },
                function() {
                    log("getArticles failed");
                    that.removeLoader();
                }
            );
        },
        "displayArticles": function(items) {
            this.$mainContainer.html(this.template({
                "articles": items
            }));
        },
        "removeLoader": function() {
            $(document.getElementById("template-page2-loader")).remove();
        },
        "clear": function() {
            this.$mainContainer.empty();
        }
    });

    return Page2aView;
});