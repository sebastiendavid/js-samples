define([], function() {

    Articles = can.Model({
        findAll: "GET /api/articles",
    },{});

    return Articles;
});