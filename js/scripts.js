
$(document).ready(function(){/* google maps -----------------------------------------------------*/
google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

    var tga = [{"x":-12.0260545096, "y": -77.0340831268},{"x":-12.0274076123, "y": -77.0330025559},{"x":-12.0291592918, "y": -77.0310543225},{"x":-12.0324110761, "y": -77.0283404303},{"x":-12.0344925837, "y": -77.0296518924},{"x":-12.0364412879, "y": -77.0308810537},{"x":-12.0394965292, "y": -77.0328993192},{"x":-12.0441405913, "y": -77.0360747514},{"x":-12.0470139258, "y": -77.0380638333},{"x":-12.051832, "y": -77.03872},{"x":-12.0554868487, "y": -77.0383635281},{"x":-12.0573557013, "y": -77.0382145986},{"x":-12.0618036148, "y": -77.0378814522},{"x":-12.0631470716, "y": -77.0377275065},{"x":-12.0676132618, "y": -77.0370944046},{"x":-12.0708235636, "y": -77.0366030449},{"x":-12.1346123066, "y": -77.0258633001},{"x":-12.1333405513, "y": -77.0274313421},{"x":-12.1300712173, "y": -77.0297088751},{"x":-12.1271643641, "y": -77.0294651334},{"x":-12.1250149671, "y": -77.0294223038},{"x":-12.1232800142, "y": -77.0291554263},{"x":-12.1219188469, "y": -77.0289838688},{"x":-12.1201409565, "y": -77.0289103621},{"x":-12.116196154, "y": -77.0293124938},{"x":-12.1140605151, "y": -77.0296754941},{"x":-12.1118878388, "y": -77.0300327936},{"x":-12.1091364193, "y": -77.0304986587},{"x":-12.1058162695, "y": -77.03107625},{"x":-12.1038358498, "y": -77.0314074268},{"x":-12.1005161668, "y": -77.0319707559},{"x":-12.0973679216, "y": -77.0324550541},{"x":-12.0904015301, "y": -77.0336813633},{"x":-12.0942690875, "y": -77.0331570732},{"x":-12.0965389147, "y": -77.0328468024},{"x":-12.1004963678, "y": -77.0321497344},{"x":-12.1038358498, "y": -77.0314074268},{"x":-12.1005161668, "y": -77.0319707559},{"x":-12.0973679216, "y": -77.0324550541},{"x":-12.0940085618, "y": -77.0329608093},{"x":-12.090107153, "y": -77.0335296634},{"x":-12.0873375456, "y": -77.0339401362},{"x":-12.0849587534, "y": -77.0342662111},{"x":-12.0827552722, "y": -77.0345978524},{"x":-12.0800756613, "y": -77.0349813214},{"x":-12.0780900722, "y": -77.035301493},{"x":-12.1091364193, "y": -77.0304986587},{"x":-12.1058162695, "y": -77.03107625},{"x":-12.1038358498, "y": -77.0314074268},{"x":-12.1005161668, "y": -77.0319707559},{"x":-12.0973679216, "y": -77.0324550541},{"x":-12.0940085618, "y": -77.0329608093},{"x":-12.090107153, "y": -77.0335296634},{"x":-12.0873375456, "y": -77.0339401362},{"x":-12.0849587534, "y": -77.0342662111},{"x":-12.0827552722, "y": -77.0345978524},{"x":-12.0800756613, "y": -77.0349813214},{"x":-12.0770029753, "y": -77.0354520143},{"x":-12.0759072802, "y": -77.0356197388},{"x":-12.054640043, "y": -77.0382314358},{"x":-12.0513897732, "y": -77.0386055391},{"x":-12.0477497822, "y": -77.0383153163},{"x":-12.044857909, "y": -77.0363237261},{"x":-12.0438189484, "y": -77.0356037065},{"x":-12.0409175445, "y": -77.0295511437},{"x":-12.0483864392, "y": -77.0389895377},{"x":-12.051832, "y": -77.03872},{"x":-12.0529850781, "y": -77.0385794602},{"x":-12.0554868487, "y": -77.0383635281},{"x":-12.0618036148, "y": -77.0378814522},{"x":-12.0631470716, "y": -77.0377275065},{"x":-12.0656140938, "y": -77.0373778886},{"x":-12.0759072802, "y": -77.0356197388},{"x":-12.073861369, "y": -77.0359107762},{"x":-12.0714531121, "y": -77.0362879786},{"x":-12.0687277962, "y": -77.0366883915},{"x":-12.0659511833, "y": -77.0371284785},{"x":-12.0616254084, "y": -77.0376479043},{"x":-12.0605432952, "y": -77.0377176392},{"x":-12.054640043, "y": -77.0382314358},{"x":-12.0523271354, "y": -77.0384206466},{"x":-12.0513897732, "y": -77.0386055391},{"x":-12.0739195455, "y": -77.036155187},{"x":-12.0764386202, "y": -77.0357759146},{"x":-12.0739195455, "y": -77.036155187},{"x":-12.0793653164, "y": -77.0353504513},{"x":-12.0821450417, "y": -77.0349019596},{"x":-12.0851684685, "y": -77.0344825948},{"x":-12.0861699027, "y": -77.0342964307},{"x":-12.0904015301, "y": -77.0336813633},{"x":-12.0942690875, "y": -77.0331570732},{"x":-12.0965389147, "y": -77.0328468024},{"x":-12.0985415252, "y": -77.0325068283},{"x":-12.1027099398, "y": -77.0318108751},{"x":-12.1064255607, "y": -77.031183542},{"x":-12.1085658264, "y": -77.0308393308},{"x":-12.1113236761, "y": -77.0303006089},{"x":-12.1134286626, "y": -77.0299817235},{"x":-12.1157335975, "y": -77.0295943467},{"x":-12.1187177517, "y": -77.0291488894},{"x":-12.1220860856, "y": -77.031085954},{"x":-12.1252172843, "y": -77.0329875741},{"x":-12.1268649339, "y": -77.0297906705},{"x":-12.1309854547, "y": -77.0299375975},{"x":-12.1337901545, "y": -77.0270595481},{"x":-12.1351290634, "y": -77.0254289755},{"x":-12.0940085618, "y": -77.0329608093},{"x":-12.090107153, "y": -77.0335296634},{"x":-12.0873375456, "y": -77.0339401362},{"x":-12.0827552722, "y": -77.0345978524},{"x":-12.0800756613, "y": -77.0349813214},{"x":-12.0780900722, "y": -77.035301493},{"x":-12.0770029753, "y": -77.0354520143},{"x":-12.073861369, "y": -77.0359107762},{"x":-12.0714531121, "y": -77.0362879786},{"x":-12.0687277962, "y": -77.0366883915},{"x":-12.0659511833, "y": -77.0371284785},{"x":-12.0605432952, "y": -77.0377176392},{"x":-12.0564817334, "y": -77.0380965275},{"x":-12.0523271354, "y": -77.0384206466},{"x":-12.0513897732, "y": -77.0386055391},{"x":-12.046801272, "y": -77.0376453134},{"x":-12.0438189484, "y": -77.0356037065},{"x":-12.0392125488, "y": -77.0324217132},{"x":-12.0370167507, "y": -77.0309690194},{"x":-12.0352854678, "y": -77.0298983402},{"x":-12.0325022923, "y": -77.0280505458},{"x":-12.0289471107, "y": -77.030998389},{"x":-12.0274411182, "y": -77.0326852546},{"x":-12.0264773315, "y": -77.0337583081},{"x":-12.073861369, "y": -77.0359107762},{"x":-12.0714531121, "y": -77.0362879786},{"x":-12.0687277962, "y": -77.0366883915},{"x":-12.0659511833, "y": -77.0371284785},{"x":-12.0616254084, "y": -77.0376479043},{"x":-12.0564817334, "y": -77.0380965275},{"x":-12.0394965292, "y": -77.0328993192},{"x":-12.04515021, "y": -77.0367700988},{"x":-12.0483643328, "y": -77.0389916947},{"x":-12.0529850781, "y": -77.0385794602},{"x":-12.0554868487, "y": -77.0383635281},{"x":-12.0573557013, "y": -77.0382145986},{"x":-12.0618036148, "y": -77.0378814522},{"x":-12.0656140938, "y": -77.0373778886},{"x":-12.0676132618, "y": -77.0370944046},{"x":-12.0708235636, "y": -77.0366030449}];
    var metro = [{"x":-12.1793736341, "y":-77.0094896593},{"x":-12.1725560299, "y":-77.0157939918},{"x":-12.1680498792, "y":-77.0191880579},{"x":-12.1600419077, "y":-77.0190234461},{"x":-12.1527789798, "y":-77.0195864941},{"x":-12.1480030882, "y":-77.0200146258},{"x":-12.1408555548, "y":-77.0178006501},{"x":-12.1357543553, "y":-77.0190637778},{"x":-12.1290857071, "y":-77.0230418665},{"x":-12.1249862275, "y":-77.0244176278},{"x":-12.1188467686, "y":-77.0261439938},{"x":-12.1130154091, "y":-77.0262901911},{"x":-12.108240939, "y":-77.0267614841},{"x":-12.1022489217, "y":-77.0273332242},{"x":-12.0964038126, "y":-77.024949881},{"x":-12.0895752508, "y":-77.0232197699},{"x":-12.0826332771, "y":-77.0261701226},{"x":-12.0769908364, "y":-77.0287909677},{"x":-12.0709666937, "y":-77.0313274612},{"x":-12.0573396949, "y":-77.0359486064},{"x":-12.0470885511, "y":-77.042654317},{"x":-12.045609047, "y":-77.0428185954},{"x":-12.0513167647, "y":-77.0423811729},{"x":-12.0573056168, "y":-77.0418535299},{"x":-12.0524009178, "y":-77.0328211336},{"x":-12.0485915511, "y":-77.0339551049},{"x":-12.0494664794, "y":-77.0325068189},{"x":-12.0465948492, "y":-77.0372014371},{"x":-12.0462355979, "y":-77.0377331909},{"x":-12.0435893617, "y":-77.0421092366},{"x":-12.0372812158, "y":-77.0435642314},{"x":-12.0298871717, "y":-77.0442068176},{"x":-12.0240810955, "y":-77.049089591},{"x":-12.0185574229, "y":-77.0513117766},{"x":-12.0116045087, "y":-77.0528538485},{"x":-12.0070068492, "y":-77.0538491189},{"x":-12.0019448422, "y":-77.0548063508},{"x":-11.9982300921, "y":-77.0553295372},{"x":-11.9946994184, "y":-77.0561680982},{"x":-11.9893171755, "y":-77.0569938333},{"x":-11.9817012075, "y":-77.0588899993}];

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(-12.080927,-77.031317);
  
  var input_desde = (document.getElementById('desde_donde')), 
       input_hasta = (document.getElementById('hasta_donde'));
  
  var mapOptions = {
    center: latlng,
    scrollWheel: false,
    zoom: 12
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
    $('#coord_desde').val(place.geometry.location.A + ',' +place.geometry.location.F);
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
    
    $('#coord_hasta').val(place.geometry.location.A + ',' +place.geometry.location.F);    
    marker_hasta.setPosition(place.geometry.location);
    marker_hasta.setVisible(true);
    
  });




    var flightPlanCoordinates = [];
    metro.forEach(function(entry) {
        flightPlanCoordinates.push(new google.maps.LatLng(entry.x,entry.y));
    });

    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: false,
      strokeColor: '#00FF00',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    flightPath.setMap(map);  
    var flightPlanCoordinates1 = [];
    tga.forEach(function(entry) {
        flightPlanCoordinates1.push(new google.maps.LatLng(entry.x,entry.y));
    });

    var flightPath1 = new google.maps.Polyline({
        path: flightPlanCoordinates1,
        geodesic: false,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath1.setMap(map);
    var locationInicio = new google.maps.LatLng(-12.080927,-77.031317);
    var locationFin = new google.maps.LatLng(-12.080927,-76.991317);
    var markerInicio = new google.maps.Marker({
        position: locationInicio,
        map: map,
        title:'Inicio'
    });
    
    var markerFin  = new google.maps.Marker({
        position: locationFin,
        map: map,
        title:'Fin'
      });
    
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarkerInicio(event.latLng);   
    });  


    google.maps.event.addListener(map, 'rightclick', function(event) {
       placeMarkerFin(event.latLng);       
    });







    function placeMarkerInicio(location) {
    
        if (!markerInicio) {
            // Create the marker if it doesn't exist
            markerInicio = new google.maps.Marker({
            position: location,
            map: map
            });
        }
        // Otherwise, simply update its location on the map.
        else { markerInicio.setPosition(location); 
            return comparador(
                markerInicio.getPosition().lat(),
                markerInicio.getPosition().lng(),
                markerFin.getPosition().lat(),
                markerFin.getPosition().lng(),tga,metro
                        );
        }
    }


    function placeMarkerFin(location) 
    {
        if (!markerFin) {
            // Create the marker if it doesn't exist
            markerFin = new google.maps.Marker({
            position: location,
            map: map
            });
        }
        // Otherwise, simply update its location on the map.
        else { markerFin.setPosition(location); 
            comparador(
                markerInicio.getPosition().lat(),
                markerInicio.getPosition().lng(),
                markerFin.getPosition().lat(),
                markerFin.getPosition().lng(),tga,metro
            );
        }
    }


    function distanciaGeodesica(lat1,long1,lat2,long2) 
    { 

        var degtorad = 0.01745329; 
        var radtodeg = 57.29577951; 

        var dlong = (long1 - long2); 
        var dvalue = (Math.sin(lat1 * degtorad) * Math.sin(lat2 * degtorad)) + (Math.cos(lat1 * degtorad) * Math.cos(lat2 * degtorad) * Math.cos(dlong * degtorad)); 

        var dd = Math.acos(dvalue) * radtodeg; 

        var miles = (dd * 69.16); 
        var km = (dd * 111.302); 

        return km; 
    }


    function comparador(lat1,long1,lat2,long2,tga,metro) {
        var tgaInicio = 1000000000;
        var tgaFinal = 1000000000;
        var metroInicio = 1000000000;
        var metroFinal = 1000000000;
        var current,current1,current2,current3;
        tga.forEach(function(entry) {
                current = distanciaGeodesica(
                    entry.x,
                    entry.y,
                    lat1,
                    long1
                            );
                    current1 = distanciaGeodesica(
                    entry.x,
                    entry.y,
                    lat2,
                    long2
                            );
                if(current < tgaInicio)
                    tgaInicio = current;
                if(current1 < tgaFinal)
                    tgaFinal = current1;
        });
        metro.forEach(function(entry) {
            current2 = distanciaGeodesica(
                entry.x,
                entry.y,
                lat1,
                long1
                        );
                current3 = distanciaGeodesica(
                entry.x,
                entry.y,
                lat2,
                long2
                        );
            if(current2 < metroInicio)
                metroInicio = current2;
            if(current3 < metroFinal)
                metroFinal = current3;
        });

        if(metroInicio + metroFinal > tgaInicio + tgaFinal) {
            $('#myModal div div div').html('TGA');           
            console.log('TGA');
        } else {
           console.log('Metro');
           $('#myModal div div div').html('Metro');
        }
        $('#myModal').modal('show');
        
    }


  





};
/* end google maps -----------------------------------------------------*/
});