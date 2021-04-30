var isLoad = false;
var map = null;
var markers = [];
// loadMap function 
function loadMap(latlan) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    maxZoom: 18,
    minZoom: 6,
    scrollwheel: true,
    center: latlan
  });
}
// end loadMap function 
// add markers function 
function addMarke(latlan, map) {
  var marker = new google.maps.Marker({
    position: latlan,
    map: map
  });
  markers.push(marker);
}
// end markers function 

// Deletes all markers in the array by removing references to them.
function deleteMarkers(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
var markR = [
  { lat: 35.444, lng: 6.444 },
  { lat: 35.555, lng: 6.555 },
  { lat: 35.3666, lng: 6.666 },
  { lat: 35.777, lng: 6.777 },
  { lat: 35.888, lng: 6.888 },
  { lat: 34.363, lng: 7.584 },
  { lat: 35.001, lng: 7.584 },
  { lat: 31.363, lng: 4.584 },
  { lat: 36.36573, lng: 6.55484 },
  { lat: 35.9363, lng: 5.98724 },
  { lat: 35.354263, lng: 6.584 },
  { lat: 35.363, lng: 6.1545884 }

]

// initial function (main function) 
function initMap() {
  $(document).ready(function () {
    // lodad map
 
    $("#map-btn").click(function () {

      if (!isLoad) {
        var latlan = { lat: 35.00, lng: 6.00 };
        loadMap(latlan);
        /**
         * 
         */

        

        var infowindow = new google.maps.InfoWindow({
          content: "" + map.getCenter(),
          position: map.getCenter()
        });
        infowindow.open(map);
        map.addListener('click', function () {
          var tr = map.getBounds().getNorthEast();
          var bl = map.getBounds().getSouthWest();
          var mm = map.getCenter();

        
          var tl =new google.maps.LatLng(tr.lat(), bl.lng());
          var br = new google.maps.LatLng(bl.lat(), tr.lng());

          var fli = [
            tr, br, tl, bl
          ];
          fli.forEach(e => {
            
            addMarke(e, map);
          });
        });
        map.addListener('center_changed', function () {
          infowindow.setContent('Zodom : ' + map.getBounds().getNorthEast());
        });
        /**
         * 
         */
        isLoad = true;
      }
      $("#mapContainer").slideToggle("slow");

    });
    // end load map 
    // show markers 

    $("#map2-btn").click(function () {
      var l;
      if (isLoad) {
        console.log("ede");
        markR.forEach(latlan => {
          addMarke(latlan, map);
          l = latlan;
        });

      }


    });

    // end show markers 












  });

}
// end initial function


