define(["text!html/page1.html", "canjs-page1bView"], function(templates, Page1bView) {

    var Page1aView = can.Control({}, {
        "init": function() {
            this.$mainContainer = this.options.globals.$mainContainer;
            this.templates = templates;
            this.template = $(templates).find("#template-page1a").html();
            this.$el = $(this.element);
            this.$el.attr("id", "page1-view");
        },
        "render": function() {
            this.$el.append(this.template);
            this.$mainContainer.html(this.$el);
            this.$moreDetails = $(document.getElementById("page1-more-details"));
            return this;
        },
        "#page1-more-details-link click": function(elem, event) {
            event.preventDefault();
            if(this.moreDetailsView) {
                this.moreDetailsView.clear();
            }
            this.moreDetailsView = new Page1bView(document.createElement('div'), {
                "templates": this.templates,
                "$container": this.$el
            });
            this.$moreDetails.hide();
            this.moreDetailsView.render();
        },
        "clear": function() {
            if(this.moreDetailsView) {
                this.moreDetailsView.clear();
            }
            this.moreDetailsView = null;
            this.$el.remove();
        }
    });

    return Page1aView;
});