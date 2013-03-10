define(function() {

    var Page1bView = can.Control({}, {
        "init": function() {
            this.$el = $(this.element);
            this.$container = this.options.$container;
            this.template = $(this.options.templates).find("#template-page1b").html();
        },
        "render": function() {
            if(this.$el.children().length === 0) {
                this.$el.append(this.template);
                this.$container.append(this.$el);
            } else {
                this.$el.show();
            }
            return this;
        },
        "#page1-hide-details click": function(elem, event) {
            event.preventDefault();
            this.$el.hide();
            if(!this.$moreDetails) {
                this.$moreDetails = $(document.getElementById("page1-more-details"));
            }
            this.$moreDetails.show();
        },
        "clear": function() {
            this.$el.remove();
        }
    });

    return Page1bView;
});