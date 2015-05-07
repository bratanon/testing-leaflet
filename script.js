(function(window, document) {

    var map = L.map('map').setView([57.6195, 11.893], 18);

    L.tileLayer('http://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Emil Stjerneman',
        id: 'examples.map-i875mjb7'
    }).addTo(map);


    var homeMarker = L.marker([57.6196, 11.8916]).addTo(map);

    homeMarker.bindPopup("Home sweat home");

})(window, document);
