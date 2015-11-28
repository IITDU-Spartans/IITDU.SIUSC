/**
 * Created by DELL on 11/27/2015.
 */
app.service('heatmapService', ["remote", function (remote) {

    this.getHeatMapValues = function (crop) {
        return remote.getHeatMapValues(crop);
    };
}]);