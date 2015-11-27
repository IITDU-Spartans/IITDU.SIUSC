/**
 * Created by Anik 0422 on 10/25/15.
 */
app.controller('AuthController', ['$scope', 'authService', '$state', 'FileUploader', 'uuidService', function ($scope, authService, $state, FileUploader, uuidService) {

    $scope.uploader = new FileUploader({
        url: 'http://localhost:3444/file/upload'
    });

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

        if (registerModel.Password == registerModel.ConfirmPassword) {
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