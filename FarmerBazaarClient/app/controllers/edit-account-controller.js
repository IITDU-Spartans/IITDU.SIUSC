/**
 * Created by Rifat on 11/28/15.
 */
app.controller('editAccountController', function($scope, authService, $sce){

    $scope.editAccount = function (editModel) {

        editModel.FarmerId = authService.getFarmerId();
        editModel.PhotoUrl = $scope.uploader.queue[0].file.name;
        $scope.uploader.uploadAll();

        $scope.uploader.onCompleteAll = function () {
            authService.editUser(editModel).success(function (response) {
                editModel.PhotoUrl = $sce.trustAsResourceUrl("http://localhost:3444/upload/" + editModel.PhotoUrl);
                toastr.success("অ্যাকাউনট হালনাগাদ সম্পন্ন হয়েছে");
            }).error(function () {

                });
        }
    }

    $scope.editModel = {};
    $scope.GetUser=function(){
        var farmerIdModel = {};
        farmerIdModel.FarmerId = authService.getUser().farmerId;
        authService.getFarmer(farmerIdModel).success(function(response){
            response.PhotoUrl=$sce.trustAsResourceUrl("http://localhost:3444/upload/" + response.PhotoUrl);
            $scope.editModel = response;
        })
    }

    $scope.GetUser();

})