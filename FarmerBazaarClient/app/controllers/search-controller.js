/**
 * Created by Rifat on 11/27/15.
 */
app.controller('searchController', ['$scope', 'searchService', '$stateParams', '$rootScope', function ($scope, searchService, $stateParams, $rootScope) {


    /*$scope.searchModel = {};
    $scope.searchModel.ProductName = $stateParams.searchModel.ProductName;
    $scope.searchModel.DistrictName = $stateParams.searchModel.DistrictName;
    $scope.searchModel.Page = 0;
    $scope.searchModel.Size = 10;
    $scope.products = {};
*/
    $scope.products={};
    $scope.searchModel={};
    $scope.searchModel = $rootScope.searchModel;
    $scope.districts = [
        {"name": 'জেলা'},
        {"name": 'ঢাকা'},
        {"name": 'চট্টগ্রাম'}
    ];

    $scope.searchProduct =function(sModel){
       /* $scope.searchModel={};
        $scope.searchModel.ProductName=sModel.ProductName;
        $scope.searchModel.DistrictName=sModel.SelectedDistrict.name;*/
        $scope.searchModel.ProductName = sModel.ProductName;
        $scope.searchModel.DistrictName = sModel.SelectedDistrict.name;
        $scope.searchModel.Page = 0;
        $scope.searchModel.Size = 10;
        $scope.getAllProductByDistrictAndProductName();
    }


    $scope.getAllProductByDistrictAndProductName = function () {

        searchService.getAllProductByDistrictAndProductName($scope.searchModel).success(function (response) {

            $scope.products={};
            $scope.products = response;
           // alert($scope.products1);
        }).error(function () {
                console.log('error while retrieving search result');
            });

    }

    $scope.getAllProductByDistrictAndProductName();

}])