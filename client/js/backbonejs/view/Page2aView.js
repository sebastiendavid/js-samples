define(["text!html/page2.html", "backbonejs-articles"], function(html, Articles) {
    return Backbone.View.extend({
        "initialize": function(globals) {
            this.$mainContainer = globals.$mainContainer;
            this.template = Handlebars.compile($(html).find("#template-page2").html());
            this.loader = $(html).find("#template-page2-loader").html();
        },
        "render": function() {
            this.$mainContainer.html(this.loader);
            this.getArticles();
        },
        getArticles: function() {
            var that = this;
            new Articles().fetch({
                "success": function(collection, response, options) {
                    that.displayArticles(collection);
                    that.removeLoader();
                },
                "error": function(collection, xhr, options) {
                    log("getArticles failed");
                    that.removeLoader();
                }
            });
        },
        displayArticles: function(models) {
            this.$mainContainer.html(this.template({
                "articles": models.toJSON()
            }));
        },
        removeLoader: function() {
            $(document.getElementById("template-page2-loader")).remove();
        },
        clear: function() {
            this.remove();
        }
    });
});