/**
 * Created by DELL on 11/27/2015.
 */
app.controller("ProductController", ['$scope', '$state', 'productService', 'FileUploader','$sce', function ($scope, $state, productService, FileUploader, $sce) {

    $scope.uploader = new FileUploader({
        url: 'http://localhost:3444/file/upload'
    });

    $scope.districts = [
        { "name" : "﻿চট্টগ্রাম"},
        { "name" : "কুমিল্লা"},
        { "name" : "ব্রাহ্মণবাড়িয়া"},
        { "name" : "চাঁদপুর"},
        { "name" : "বান্দরবান"},
        { "name" : "রাঙামাটি"},
        { "name" : "খাগড়াছড়ি"},
        { "name" : "কক্সবাজার"},
        { "name" : "ফেনী"},
        { "name" : "লক্ষীপুর"},
        { "name" : "নোয়াখালী"},
        { "name" : "বাগেরহাট"},
        { "name" : "চুয়াডাঙ্গা"},
        { "name" : "যশোর"},
        { "name" : "ঝিনাইদহ"},
        { "name" : "খুলনা"},
        { "name" : "কুষ্টিয়া"},
        { "name" : "মাগুরা"},
        { "name" : "মেহেরপুর"},
        { "name" : "নড়াইল"},
        { "name" : "সাতক্ষীরা"},
        { "name" : "ঢাকা"},
        { "name" : "ফরিদপুর"},
        { "name" : "গাজীপুর"},
        { "name" : "গোপালগঞ্জ"},
        { "name" : "কিশোরগঞ্জ"},
        { "name" : "মাদারীপুর"},
        { "name" : "মানিকগঞ্জ"},
        { "name" : "মুন্সিগঞ্জ"},
        { "name" : "নারায়ণগঞ্জ"},
        { "name" : "নরসিংদী"},
        { "name" : "রাজবাড়ী"},
        { "name" : "শরিয়তপুর"},
        { "name" : "টাঙ্গাইল"},
        { "name" : "বরগুনা"},
        { "name" : "বরিশাল"},
        { "name" : "ভোলা"},
        { "name" : "ঝালকাঠি"},
        { "name" : "পটুয়াখালী"},
        { "name" : "পিরোজপুর"},
        { "name" : "দিনাজপুর"},
        { "name" : "গাইবান্ধা"},
        { "name" : "কুড়িগ্রাম"},
        { "name" : "লালমনিরহাট"},
        { "name" : "নীলফামারী"},
        { "name" : "পঞ্চগড়"},
        { "name" : "রংপুর"},
        { "name" : "ঠাকুরগাঁও"},
        { "name" : "বগুড়া"},
        { "name" : "জয়পুরহাট"},
        { "name" : "নওগাঁ"},
        { "name" : "নাটোর"},
        { "name" : "চাঁপাইনবাবগঞ্জ"},
        { "name" : "পাবনা"},
        { "name" : "রাজশাহী"},
        { "name" : "সিরাজগঞ্জ"},
        { "name" : "হবিগঞ্জ"},
        { "name" : "মৌলভীবাজার"},
        { "name" : "সুনামগঞ্জ"},
        { "name" : "সিলেট"},
        { "name" : "ময়মনসিংহ"},
        { "name" : "শেরপুর"},
        { "name" : "জামালপুর"},
        { "name" : "নেত্রকোনা"}
    ];

    $scope.Rating = 0;
    $scope.addProduct = function (product) {

        product.PhotoUrl=$scope.uploader.queue[0].file.name;

        $scope.uploader.uploadAll();
        $scope.uploader.onCompleteAll = function () {

            product.ExpiryDate = product.ExpiryDate;//.toString();
            productService.addProduct(product).success(function (response) {
                toastr.success("Your product is successfully added.");
                //console.log(response);
                response.PhotoUrl=$sce.trustAsResourceUrl("http://localhost:3444/upload/" + response.PhotoUrl);

                $state.go("getproduct", {product: response});
            }).error(function (response) {
                    toastr.error("Server error. Please try again.");
                    $state.go("signin");
                });
        }

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
            for (var i = 0; i < response.length; i++) {
                response[i].PhotoUrl=$sce.trustAsResourceUrl("http://localhost:3444/upload/" + response[i].PhotoUrl);
                $scope.products.push(response[i]);
            }
            //$scope.products.push(response);
            console.log($scope.products);
            $scope.Pagination.Page++;

        }).error(function (response) {
                toastr.error("Server error");
            });
    };
    $scope.getProducts();


}]);