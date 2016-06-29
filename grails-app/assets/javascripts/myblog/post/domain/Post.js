//= wrapped
//= require /angular/angular-resource

angular
    .module("myblog.post")
    .factory("Post", Post);

function Post($resource) {
    var Post = $resource(
        "post/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Post.list = Post.query;

    Post.prototype.toString = function() {
        return 'myblog.Post : ' + (this.id ? this.id : '(unsaved)');
    };

    return Post;
}
