define(function() {
    return Backbone.View.extend({
        "initialize": function($container, templates) {
            this.$container = $container;
            this.template = $(templates).find("#template-page1b").html();
        },
        events: {
            "click #page1-hide-details": "hideDetails"
        },
        "render": function() {
            if(this.$el.children().length === 0) {
                this.$el.append(this.template);
                this.$container.append(this.$el);
            } else {
                this.$el.show();
            }
        },
        "hideDetails": function(event) {
            event.preventDefault();
            this.$el.hide();
            this.$el.trigger("show-more-details-link");
        },
        clear: function() {
            this.remove();
        }
    });
});