app.controller('AuthController', ['$scope', 'authService', '$state', 'FileUploader', 'uuidService', 'searchService', '$rootScope', '$sce', function ($scope, authService, $state, FileUploader, uuidService, searchService, $rootScope, $sce) {

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
    $scope.products = {};


    $scope.signIn = function (loginModel) {

        authService.signIn(loginModel).success(function (responseData) {
            authService.setUser(responseData);
            $state.go('home');
            toastr.success("You are successfully logged in.");
            //console.log("Successfully logged in.")

        }).error(function () {
                toastr.info("Wrong email or password. Please try again.")
                //console.log("Wrong email or password. Please try again.")s
            });
    };
    $scope.signUp = function (registerModel) {


        registerModel.PhotoUrl = $scope.uploader.queue[0].file.name;
        //    $scope.uploader.queue[0].file.name = registerModel.PhotoUrl;

        if (registerModel.Password == registerModel.ConfirmPassword && registerModel.Password.length >= 6) {
            $scope.uploader.uploadAll();
            $scope.uploader.onCompleteAll = function () {
                authService.signUp(registerModel).success(function (responseData) {
                    authService.setUser(responseData);
                    $state.go('home');
                    toastr.success("Successfully registered.");
                    //console.log("Successfully registered.");
                }).error(function () {
                        toastr.error("Registration error. Please try again.");
                        //    console.log("Registration error");
                    });
            }
        }
        else {
            toastr.error("Password not matched");
            //console.log("Password not matched");
        }
    };
    $scope.logOut = function () {
        authService.logOut().success(function (responseData) {
            authService.deleteUser();
            $state.go('home');
        }).error(function () {
                toastr.error("Server error. Can't log out");
                //console.log("Can't log out. Server error!!!")
            });
    };

    $scope.isLoggedIn = function () {
        return authService.isUserLoggedIn();
    };

    $scope.search = function (searchModel) {
        //    $state.go('search', {searchModel: {ProductName: searchModel.ProductName, DistrictName: searchModel.SelectedDistrict.name} });
        var model = {};
        model.DistrictName = searchModel.SelectedDistrict.name;
        model.ProductName = searchModel.ProductName;
        model.Page = 0;
        model.size = 10;
        $rootScope.searchModel = model;
        /*searchService.getAllProductByDistrictAndProductName(model).success(function (response) {

         $scope.products = response;
         alert($scope.products);
         }).error(function () {
         console.log('error while retrieving search result');
         });*/
        $state.go('search');

    }


    $scope.getCurrentState = function () {
        return $state.current.name;
    }


    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
}]);
/**
 * Created by Anik 0422 on 10/25/15.
 */
