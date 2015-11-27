/**
 * Created by Anik 0422 on 10/25/15.
 */

function Remote($http, $window, serverUrl) {


    this.signIn = function (loginModel) {
        console.log("login");
        console.log(loginModel);
        //$window.localStorage.userId = 1;
        //$window.localStorage.authToken = "token";
        var url = serverUrl + 'account/signin';
        return $http.post(url, loginModel);
    };

    this.signUp = function (registerModel) {
        console.log("signup");
        console.log(registerModel);
      //  $window.localStorage.userId = 1;
      //  $window.localStorage.authToken = "token";
        var url = serverUrl + 'account/signup';
        return $http.post(url, registerModel);
    };

    this.logOut = function (logoutModel) {
        console.log("logout");
        console.log(logoutModel);
       // $window.localStorage.clear();
        var url = serverUrl + 'account/logout';
        return $http.post(url, logoutModel);
    };

    this.editAccount = function (editModel) {
        console.log("edit account");
        console.log(editModel);
        var url = serverUrl + 'account/edit';
        return $http.post(url, editModel);
    }

    this.addProduct = function (productViewModel) {
        console.log("product");
        console.log(productViewModel);
        var url = serverUrl + "product/add";
        return $http.post(url, productViewModel);
    };

    this.getProductByProductId = function (product) {
        console.log("productId");
        console.log(product);
        var url = serverUrl + "product/get";
        return $http.post(url, product);
    };

    this.getProducts = function (productPagination) {
        console.log("Pagination");
        console.log(productPagination);
        var url = serverUrl + "product/getall";
        return $http.post(url, productPagination);
    };

};

app.service('remote', ['$http', '$window', 'serverUrl', Remote]);
//app.service('remote', ['$http', 'serverUrl', '$window', DummyRemote]);








function DummyRemote($http, serverUrl, $window) {
    this.signIn = function (loginModel) {
        var url = serverUrl + 'cvanalyzer/signin';
        $window.localStorage.authToken = "test token";
        //return $http.post(url, loginModel);
    };

    this.signUp = function (registerModel) {
        var url = serverUrl + 'account/signup';
        console.log(registerModel);
        //return $http.post(url, registerModel);
    };

    this.logOut = function (user) {
        var url = serverUrl + 'accout/logout';
        //return $http.post(url, user);
        $window.localStorage.clear();
        return true;
    };
};
