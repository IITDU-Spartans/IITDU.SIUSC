/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductDetailController", ["$scope", "$stateParams", 'productService', '$window', function($scope, $stateParams, productService, $window){
    console.log($stateParams.product);
    $scope.product = {};
    $scope.product = $stateParams.product;
    $scope.Rating = 0;
    $scope.Rate = function () {
        console.log($scope.Rating);
        if($scope.Rating>0){
            var rating = {};
            var productId = $scope.product.ProductId;
            rating.FarmerId = $window.localStorage.farmerId;
            rating.ProductId = productId;
            rating.Value = $scope.Rating;
            productService.addRating(rating).success(function (response) {
                toastr.success("Your rating added successfully");
               productService.getProduct(productId).success(function(response){
                   $scope.product.AverageRating = response.AverageRating;
               });

            }).error(function (response) {
                    toastr.error("Server error. Please try again.");
                });
        }
    }
}]);