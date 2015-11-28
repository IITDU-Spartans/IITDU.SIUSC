app.directive('navbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/partial_views/navbar.html'
    };
});

app.directive('signin', function(){
    return {
        restrict: 'E',
        templateUrl: 'app/partial_views/signin.html'
    };
});

app.directive('test', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/partial_views/test.html'
    } ;
});
/*
app.directive('search_result', function(){
    return{
        restrict: 'E',
        templateUrl: 'app/partial_views/products.html'
    } ;
});*/
