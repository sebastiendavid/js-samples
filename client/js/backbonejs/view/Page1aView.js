define(["text!html/page1.html", "backbonejs-page1bView"], function(templates, Page1bView) {
    return Backbone.View.extend({
        "initialize": function(globals) {
            this.$mainContainer = globals.$mainContainer;
            this.templates = templates;
            this.template = $(templates).find("#template-page1a").html();
        },
        events: {
            "click #page1-more-details-link": "moreDetails",
            "show-more-details-link": "showMoreDetailsLink"
        },
        "render": function() {
            this.$el.append(this.template);
            this.$mainContainer.html(this.$el);
            this.$moreDetails = $(document.getElementById("page1-more-details"));
        },
        "moreDetails": function(event) {
            event.preventDefault();
            if(this.moreDetailsView) {
                this.moreDetailsView.clear();
            }
            this.moreDetailsView = new Page1bView(this.$el, this.templates);
            this.$moreDetails.hide();
            this.moreDetailsView.render();
        },
        showMoreDetailsLink: function(event) {
            event.stopPropagation();
            this.$moreDetails.show();
        },
        clear: function() {
            if(this.moreDetailsView) {
                this.moreDetailsView.clear();
            }
            this.remove();
        }
    });
});