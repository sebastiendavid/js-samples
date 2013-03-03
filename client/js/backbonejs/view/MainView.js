define(["text!html/main.html"], function(html) {
    return Backbone.View.extend({
        "initialize": function(globals) {
            this.template = Handlebars.compile(html);
            this.$body = $(document.getElementsByTagName("body")[0]);
            this.$el.attr("id", "main-view");
            this.$el.css("opacity", "0");
            this.globals = globals;
        },
        "render": function() {
            this.$body.append(this.$el);
            this.$el.append(this.template({
                "page1Link": "#page1",
                "page1Label": "Page 1",
                "page2Link": "#page2",
                "page2Label": "Page 2"
            }));
            this.globals.$mainContainer = $(document.getElementById("main-container"));
        }
    });
});