/**
 * Created by DELL on 11/27/2015.
 */
app.service('productService', ['remote', 'authService', function (remote, authService) {

    this.addProduct = function (product) {
        product.FarmerId = authService.getFarmerId();
        if(!product.FarmerId){
            toastr.warning("Please login first.");
        }
        return remote.addProduct(product);
    };

    this.getProduct = function (productId) {
        var product = {};
        product.ProductId = productId;
        return remote.getProductByProductId(product);
    };

    this.getProducts = function () {
        var pagination = {};
        return remote.getProducts(pagination);
    };
}]);