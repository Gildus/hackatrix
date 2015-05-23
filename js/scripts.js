
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(-12.071701, -76.941789);
  
  var input_desde = (document.getElementById('desde_donde')), 
       input_hasta = (document.getElementById('hasta_donde'));
  
  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 18
  };
  
  var marker_desde = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var marker_hasta = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });
  
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker_desde.setMap(map);
  marker_hasta.setMap(map);
  
  var autocomplete_desde = new google.maps.places.Autocomplete(input_desde);
  autocomplete_hasta = new google.maps.places.Autocomplete(input_hasta);
  autocomplete_desde.bindTo('bounds', map);
  autocomplete_hasta.bindTo('bounds', map);
  
  

  google.maps.event.addListener(autocomplete_desde, 'place_changed', function() {
    
    marker_desde.setVisible(false);
    var place = autocomplete_desde.getPlace();
    if (!place.geometry) {      
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker_desde.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker_desde.setPosition(place.geometry.location);
    marker_desde.setVisible(true);
    
  });
  
  
  
  
  google.maps.event.addListener(autocomplete_hasta, 'place_changed', function() {
    
    marker_hasta.setVisible(false);
    var place = autocomplete_hasta.getPlace();
    if (!place.geometry) {      
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker_hasta.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker_hasta.setPosition(place.geometry.location);
    marker_hasta.setVisible(true);
    
  });

  





};
/* end google maps -----------------------------------------------------*/
});