/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductController", ['$scope', '$state', 'productService', function($scope, $state, productService){


    $scope.Rating = 0;
    $scope.addProduct = function (product) {
        productService.addProduct(product).success(function (response) {
            toastr.success("Your product is successfully added.");
            //console.log(response);
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


    $scope.Pagination = {};
    $scope.Pagination.Page = 0;
    $scope.Pagination.Size = 4;
    $scope.products = [];
    $scope.getProducts = function () {
        //$scope.Pagination.Page++;

        //$scope.products = productService.getProducts($scope.Products);
        //console.log($scope.products);
        productService.getProducts($scope.Pagination).success(function (response) {
            for(var i=0;i<response.length; i++){
                $scope.products.push(response[i]);
            }
            //$scope.products.push(response);
            console.log($scope.products);

        }).error(function (response) {
            toastr.error("Server error");
        });
    };
    $scope.getProducts();



}]);