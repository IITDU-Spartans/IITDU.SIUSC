/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductDetailController", ["$scope", "$stateParams", function($scope, $stateParams){
    console.log($stateParams.product);
    $scope.product = {};
    $scope.product = $stateParams.product;

}]);