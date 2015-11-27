/**
 * Created by Anik 0422 on 10/25/15.
 */
var app = angular.module("app", ['ui.router', 'angularFileUpload']);

app.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise('/page_not_found');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/partial_views/home.html'
        })
        .state('page_not_found', {
            url: '/page_not_found',
            templateUrl: 'app/partial_views/page_not_found.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/partial_views/signup.html'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'app/partial_views/signin.html'
        })
        .state('editprofile', {
            url: '/edit',
            templateUrl: 'app/partial_views/forum.html'
        });
});