app.service('mapLoadService', [function () {


    this.loadOpenstreetMap = function (divMapId, centerCoordinate, zoomLevel) {
        var tileLayerUrl = 'http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
        var tileLayerAttribution = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

        var map = buildMap(divMapId, centerCoordinate, zoomLevel);
        L.tileLayer(tileLayerUrl, {
            attribution: tileLayerAttribution
        }).addTo(map);

        return map;
    };

    this.loadGoogleMap = function (divMapId, centerCoordinate, zoomLevel) {

        var map = buildMap(divMapId, centerCoordinate, zoomLevel);
        var googleLayer = new L.Google('ROADMAP');
        //var googleLayer = new L.Google('');
        googleLayer.setZIndexOffset = 0;
        map.addLayer(googleLayer);

        return map;
    };

    this.loadGoogleStreetView = function (mapDivId, panoromaDivId, centerCoordinate, zoomLevel, loadStreetView) {

        var lat = centerCoordinate.lat;
        var lng = centerCoordinate.lng;

        var map = new google.maps.Map(document.getElementById(mapDivId));

        var streetViewService = new google.maps.StreetViewService();
        var STREETVIEW_MAX_DISTANCE = 50;
        var latLng = new google.maps.LatLng(lat, lng);
        streetViewService.getPanoramaByLocation(latLng, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
            if (status === google.maps.StreetViewStatus.OK) {
                loadStreetView(true);
                var panorama = new google.maps.StreetViewPanorama(document.getElementById(panoromaDivId));
                panorama.setPano(streetViewPanoramaData.location.pano);
                panorama.setPov({
                    heading: 270,
                    pitch: 0
                });
                panorama.setVisible(true);
                map.setStreetView(panorama);

            }
            else if (status === google.maps.StreetViewStatus.ZERO_RESULTS) {
                loadStreetView(false);
            }
            else {
                loadStreetView(false);
            }
        });
    };

    function buildMap(divMapId, centerCoordinate, zoomLevel) {
        var map = new L.Map(divMapId, {
            center: centerCoordinate,
            zoom: zoomLevel,
            scrollWheelZoom: true
        });
        return map;
    };
}]);