/**
 * Created by Rifat on 11/27/15.
 */
app.controller('searchController', ['$scope', 'searchService', '$stateParams', '$rootScope', '$state', '$sce', function ($scope, searchService, $stateParams, $rootScope, $state, $sce) {


    /*$scope.searchModel = {};
     $scope.searchModel.ProductName = $stateParams.searchModel.ProductName;
     $scope.searchModel.DistrictName = $stateParams.searchModel.DistrictName;
     $scope.searchModel.Page = 0;
     $scope.searchModel.Size = 10;
     $scope.products = {};
     */
    $scope.products = [];
    $scope.searchModel = {};
    $scope.searchModel = $rootScope.searchModel;
    $scope.Page = 0;

    $scope.districts = [
        { "name": "﻿চট্টগ্রাম"},
        { "name": "কুমিল্লা"},
        { "name": "ব্রাহ্মণবাড়িয়া"},
        { "name": "চাঁদপুর"},
        { "name": "বান্দরবান"},
        { "name": "রাঙামাটি"},
        { "name": "খাগড়াছড়ি"},
        { "name": "কক্সবাজার"},
        { "name": "ফেনী"},
        { "name": "লক্ষীপুর"},
        { "name": "নোয়াখালী"},
        { "name": "বাগেরহাট"},
        { "name": "চুয়াডাঙ্গা"},
        { "name": "যশোর"},
        { "name": "ঝিনাইদহ"},
        { "name": "খুলনা"},
        { "name": "কুষ্টিয়া"},
        { "name": "মাগুরা"},
        { "name": "মেহেরপুর"},
        { "name": "নড়াইল"},
        { "name": "সাতক্ষীরা"},
        { "name": "ঢাকা"},
        { "name": "ফরিদপুর"},
        { "name": "গাজীপুর"},
        { "name": "গোপালগঞ্জ"},
        { "name": "কিশোরগঞ্জ"},
        { "name": "মাদারীপুর"},
        { "name": "মানিকগঞ্জ"},
        { "name": "মুন্সিগঞ্জ"},
        { "name": "নারায়ণগঞ্জ"},
        { "name": "নরসিংদী"},
        { "name": "রাজবাড়ী"},
        { "name": "শরিয়তপুর"},
        { "name": "টাঙ্গাইল"},
        { "name": "বরগুনা"},
        { "name": "বরিশাল"},
        { "name": "ভোলা"},
        { "name": "ঝালকাঠি"},
        { "name": "পটুয়াখালী"},
        { "name": "পিরোজপুর"},
        { "name": "দিনাজপুর"},
        { "name": "গাইবান্ধা"},
        { "name": "কুড়িগ্রাম"},
        { "name": "লালমনিরহাট"},
        { "name": "নীলফামারী"},
        { "name": "পঞ্চগড়"},
        { "name": "রংপুর"},
        { "name": "ঠাকুরগাঁও"},
        { "name": "বগুড়া"},
        { "name": "জয়পুরহাট"},
        { "name": "নওগাঁ"},
        { "name": "নাটোর"},
        { "name": "চাঁপাইনবাবগঞ্জ"},
        { "name": "পাবনা"},
        { "name": "রাজশাহী"},
        { "name": "সিরাজগঞ্জ"},
        { "name": "হবিগঞ্জ"},
        { "name": "মৌলভীবাজার"},
        { "name": "সুনামগঞ্জ"},
        { "name": "সিলেট"},
        { "name": "ময়মনসিংহ"},
        { "name": "শেরপুর"},
        { "name": "জামালপুর"},
        { "name": "নেত্রকোনা"}
    ];
    $scope.categories = [
        {"name": 'খাদ্য শস্য'},
        {"name": 'মশলা'},
        {"name": 'দুগ্ধজাত পন্য'},
        {"name": 'ডাল জাতীয় পন্য'},
        {"name": 'সবজি'},
        {"name": 'মাছ'},
        {"name": 'গবাদি পশু'}
    ];
    //$scope.sModel = {};
//    $scope.sModel = {SelectedCategory : $scope.districts[0].name};
    $scope.predicate = "AverageRating";

    $scope.setPredicate = function (str) {
        $scope.predicate = str;
    }

    $scope.searchProduct = function (sModel) {
        /* $scope.searchModel={};
         $scope.searchModel.ProductName=sModel.ProductName;
         $scope.searchModel.DistrictName=sModel.SelectedDistrict.name;*/
        $scope.products = [];
        $scope.searchModel = {};
        $scope.searchModel.ProductName = sModel.ProductName;
        $scope.searchModel.DistrictName = sModel.SelectedDistrict.name;

        $scope.searchModel.CategoryName = sModel.SelectedCategory.name;
        $scope.searchModel.Page = $scope.Page;
        $scope.searchModel.Size = 1;
        $scope.getAllProductByDistrictAndProductName();
    }


    $scope.getAllProductByDistrictAndProductName = function () {

        if ($rootScope == null)
            return;
        searchService.getAllProductByDistrictAndProductName($scope.searchModel).success(function (response) {

            //  $scope.products={};
            for (var i = 0; i < response.length; i++) {
                response[i].PhotoUrl = $sce.trustAsResourceUrl("http://localhost:3444/upload/" + response[i].PhotoUrl);
                $scope.products.push(response[i]);// = response;
            }
            // alert($scope.products1);
        }).error(function () {
                console.log('error while retrieving search result');
            });

    }

    $scope.getAllProductByDistrictAndProductName();

    $scope.showDetails = function (product) {
        $state.go("getproduct", {product: product});
    };

    $scope.increasePage = function () {
        $scope.Page = $scope.Page + 1;
        $scope.searchModel.Page = $scope.Page;
        $scope.getAllProductByDistrictAndProductName();
    }

}])