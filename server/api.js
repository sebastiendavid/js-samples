/**
 * @license JS samples 1.0 - 2013 - Sebastien David
 * https://github.com/sebastiendavid
 */
 exports.init = function(app) {

    var i = 0, length = 10, articles = [];

    for(; i < length; i++) {
        articles.push({
            "label": "Label " + (i + 1),
            "content": "Maecenas pulvinar dignissim varius. Maecenas sed neque vitae quam tincidunt tincidunt. Sed vitae mattis lorem. Etiam dolor ante, posuere id facilisis volutpat, blandit nec sapien. Aliquam erat volutpat. Phasellus nisl nisi, elementum condimentum placerat ac, aliquam vel elit. Maecenas ullamcorper, neque vel dapibus consequat, purus arcu volutpat metus, sit amet ullamcorper ante elit vel risus. Maecenas arcu est, gravida sit amet viverra vitae, sodales vel nisi. Integer mauris odio, euismod in ultrices quis, eleifend ac neque. In hac habitasse platea dictumst. Nunc suscipit purus porttitor nisl ullamcorper dapibus in eu elit. Ut posuere hendrerit vulputate. In eget leo diam, pretium dignissim risus."
        });
    }

    app.get("/api/articles", function(req, res){
        res.set({
            "Content-Type": "application/json; charset=utf-8"
        });
        res.json(articles);
    });
 }