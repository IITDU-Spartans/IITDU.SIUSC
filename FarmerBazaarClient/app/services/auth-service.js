/**
 * Created by Anik 0422 on 10/25/15.
 */
app.service('authService', ['$window', 'remote', function($window, remote){

    this.signIn = function(loginModel){
        return remote.signIn(loginModel);
    };

    this.signUp = function(registerModel){
        return remote.signUp(registerModel);
    };

    this.logOut = function(){
        var logoutModel = {};
        logoutModel.FarmerId = this.getFarmerId();
        return remote.logOut(logoutModel);
    };

    this.setToken = function(tokenValue){
        $window.localStorage.authToken = tokenValue;
    };
    this.getToken = function(){
        return $window.localStorage.authToken;
    };

    this.setFarmerId = function(farmerId){
        $window.localStorage.farmerId = farmerId;
    };
    this.getFarmerId = function(){
        return $window.localStorage.farmerId;
    };

    this.setUser = function(loggedInUser){
        $window.localStorage.farmerId = loggedInUser.FarmerId;
        $window.localStorage.authToken = loggedInUser.TokenValue;
    };
    this.getUser = function(){
        var user = {};
        user.farmerId = $window.localStorage.farmerId;
        user.tokenValue = $window.localStorage.authToken;
        return user;
    };

    this.deleteUser = function (){
        $window.localStorage.clear();
    };

    this.isUserLoggedIn = function(){
        if($window.localStorage.authToken)
            return true;
        else
            return false;
    };

    this.isValidUser = function(loggedInFarmerId, ownerId){
        if(loggedInFarmerId == ownerId)
            return true;
        else
            return false;
    };
}]);