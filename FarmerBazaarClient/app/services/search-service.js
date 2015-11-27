/**
 * Created by Rifat on 11/27/15.
 */
app.service('searchService', ['remote', function(remote){

    this.getAllProductByDistrictAndProductName = function(districtAndProductNameModel){
        return remote.getAllProductByDistrictAndProductName(districtAndProductNameModel);
    }

}])