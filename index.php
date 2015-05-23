<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Rutas de transporte publico</title>
    <style>
      html, body, #map-canvas {
        height: 100%;
        margin: 0px;
        padding: 0px
      }
    </style>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script>
// This example creates a 2-pixel-wide red polyline showing
// the path of William Kingsford Smith's first trans-Pacific flight between
// Oakland, CA, and Brisbane, Australia.

function initialize() {
    var pos = new google.maps.LatLng(-12.080927,-77.031317);
/*if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }*/
  var mapOptions = {
    zoom: 12,
    center: pos,
    //center: new google.maps.LatLng(-12.080927,-77.031317),
    //mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var flightPlanCoordinates = [
  <?php
if (($gestor = fopen("metropolitano.csv", "r")) !== FALSE) {
    while (($datos = fgetcsv($gestor, 1000, ",")) !== FALSE) {
            ?>
               new google.maps.LatLng(<?php echo "$datos[1],$datos[0]"?>),         
        <?php              
    }
    fclose($gestor);
}
?>    
  ];
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: false,
    strokeColor: '#00FF00',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath.setMap(map);  
  var flightPlanCoordinates1 = [
  <?php
if (($gestor = fopen("tga.csv", "r")) !== FALSE) {
    while (($datos = fgetcsv($gestor, 1000, ",")) !== FALSE) {
            ?>
               new google.maps.LatLng(<?php echo "$datos[1],$datos[0]"?>),         
        <?php              
    }
    fclose($gestor);
}
?>    
  ];
  var flightPath1 = new google.maps.Polyline({
    path: flightPlanCoordinates1,
    geodesic: false,
    strokeColor: '#0000FF',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  flightPath1.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

    </script>
  </head>
  <body>
    <div id="map-canvas"></div>
  </body>
</html>