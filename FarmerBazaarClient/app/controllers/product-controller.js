/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductController", ['$scope', '$state', 'productService', function($scope, $state, productService){

    $scope.Pagination = {};
    $scope.Pagination.Page = 0;
    $scope.Pagination.Size = 2;
    $scope.Rating = 4;
    $scope.addProduct = function (product) {
        productService.addProduct(product).success(function (response) {
            toastr.success("Your product is successfully added.");
            $state.go("getproduct", {product: response});
        }).error(function (response) {
            toastr.error("Server error. Please try again.");
            $state.go("signin");
        });

    };

    $scope.viewProductDetail = function (productDetail) {
        $state.go("getproduct", {product: productDetail});
    };

    $scope.getProduct = function (product) {
        productService.getProduct(product).success(function (response) {

        }).error(function (response) {

        });
    };


    $scope.getProducts = function () {
        $scope.Pagination.Page++;
        $scope.products = {};
        $scope.products = productService.getProducts($scope.Products);
        //console.log($scope.products);
        /*productService.getProducts($scope.Pagination).success(function (response) {
            $scope.products = response;

        }).error(function (response) {
            toastr.error("Server error");
        });*/
    };
    
    $scope.Rate = function () {
        var rating = {};
        var productId = $scope.product.ProductId;
        rating.FarmerId = $window.localStorage.farmerId;
        rating.ProductId = productId;
        rating.Value = $scope.Rating;
        productService.addRating(rating).success(function (response) {
            toastr.success("Your rating added successfully");
            var prod = productService.getProduct(productId);
            $scope.product.AverageRating = prod.AverageRating;
        }).error(function (response) {
            toastr.error("Server error. Please try again.");
        });
    }

}]);