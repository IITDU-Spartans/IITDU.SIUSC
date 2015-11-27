/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductController", ['$scope', 'productService', function($scope, productService){

    $scope.addProduct = function (product) {
        productService.addProduct(product).success(function (response) {

            toastr.success("Your product is successfully added.")
        }).error(function (response) {

            toastr.error("Server error. Please try again.")
        });
    };

    $scope.getProduct = function (product) {
        productService.getProduct(product).success(function (response) {

        }).error(function (response) {

        });
    };

    $scope.getProducts = function () {
        productService.getProducts().success(function (response) {

        }).error(function (response) {

        });
    };
    
}]);