define(function() {
    /* 
    ** Model properties:
    ** 
    ** label (String)
    ** content (String)
    */
    return Backbone.Model.extend({
        defaults: {
            "label": "",
            "content": ""
        }
    });
});