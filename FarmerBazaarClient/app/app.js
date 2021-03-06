/**
 * Created by Anik 0422 on 10/25/15.
 */
var app = angular.module("app", ['ui.router', 'angularFileUpload','ui.bootstrap']);

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
            url: '/editprofile',
            controller: 'editAccountController',
            templateUrl: 'app/partial_views/editAccount.html'
        })
        .state('search',{
            url: '/search',
            controller: 'searchController',
            templateUrl:'app/partial_views/search_result.html'
        })
        .state('addproduct', {
            url: '/addproduct',
            templateUrl: 'app/partial_views/addProduct.html',
            controller: 'ProductController'
        })
        .state('getproduct', {
            url: '/getproduct',
            templateUrl: 'app/partial_views/product.html',
            controller: 'ProductDetailController',
            params: {product : null}
        })
        .state('getproducts', {
            url: '/getproducts',
            templateUrl: 'app/partial_views/products.html',
            controller: 'ProductController'
        }).state('heatmap', {
            url: '/heatmap',
            templateUrl: 'app/partial_views/heatmap.html',
            controller: 'HeatmapController'
        })
    ;
});