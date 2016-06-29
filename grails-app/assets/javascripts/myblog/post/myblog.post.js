//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /myblog/core/myblog.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("myblog.post", ["ui.router", "ngResource", "myblog.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('post', {
            url: "/post",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('post.list', {
            url: "",
            templateUrl: "/myblog/post/list.html",
            controller: "PostListController as vm"
        })
        .state('post.create', {
            url: "/create",
            templateUrl: "/myblog/post/create.html",
            controller: "PostCreateController as vm"
        })
        .state('post.edit', {
            url: "/edit/:id",
            templateUrl: "/myblog/post/edit.html",
            controller: "PostEditController as vm"
        })
        .state('post.show', {
            url: "/show/:id",
            templateUrl: "/myblog/post/show.html",
            controller: "PostShowController as vm"
        });
}
