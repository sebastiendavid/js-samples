define(['backbonejs-article'], function(Article) {
    return Backbone.Collection.extend({
        model: Article,
        url: function() {
            return '/api/articles';
        }
    });
});