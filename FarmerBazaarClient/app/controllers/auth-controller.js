/**
 * Created by Anik 0422 on 10/25/15.
 */
app.controller('AuthController', ['$scope', 'authService', '$state', function ($scope, authService, $state) {

    $scope.signIn = function (loginModel) {

        authService.signIn(loginModel).success(function (responseData) {
            authService.setUser(responseData);
            $state.go('home');
            toastr.success("You are successfully logged in.");
            //console.log("Successfully logged in.")
        }).error(function () {
            toastr.error("Wrong email or password. Please try again.")
                //console.log("Wrong email or password. Please try again.")
        });
    };
    $scope.signUp = function (registerModel) {
        if (registerModel.Password == registerModel.ConfirmPassword) {
            authService.signUp(registerModel).success(function(responseData){
                authService.setUser(responseData);
                $state.go('home');
                toastr.success("Successfully registered.");
                //console.log("Successfully registered.");
            }).error(function(){
                toastr.error("Registration error. Please try again.");
                //    console.log("Registration error");
                });
        }
        else{
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
}]);