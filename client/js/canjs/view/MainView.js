define(["text!html/main.html"], function(html) {

    var MainView = can.Control({}, {
        "init": function() {
            this.template = can.view.mustache(html);
            this.$body = $(document.getElementsByTagName("body")[0]);
            this.$el = $(this.element);
            this.$el.attr("id", "main-view");
            this.$el.css("opacity", "0");
            this.globals = this.options.globals;
        },
        "render": function() {
            this.$body.append(this.$el);
            this.$el.append(this.template({
                "page1Link": "#!page/1",
                "page1Label": "Page 1",
                "page2Link": "#!page/2",
                "page2Label": "Page 2"
            }));
            this.globals.$mainContainer = $(document.getElementById("main-container"));
            this.$sections = $(document.getElementById("sections"));
            this.$page1Link = $(document.getElementById("page1-link"));
            this.$page2Link = $(document.getElementById("page2-link"));
            return this;
        },
        "updateAppBar": function(page) {
            this.$sections.find(".active").removeClass("active");
            switch(true) {
                case page == 1:
                    this.$page1Link.addClass("active");
                    break;
                case page == 2:
                    this.$page2Link.addClass("active");
                    break;
                default:
                    this.$page1Link.addClass("active");
            }
        }
    });

    return MainView;
});