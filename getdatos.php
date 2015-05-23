<?php

$url = 'http://api.lima.datosabiertos.pe/datastreams/invoke/PARAD-GEO-REFER-DE-LA?auth_key=6fde9c6f19a11ed605f0256c1fc020ad4516daa1&output=json_array';

$datos = file_get_contents($url);
$json = json_decode($datos);

$tga = array();
foreach ($json->result as $key => $item) {
    if ($key > 0) {
        $tga[] = array(
            'x' => $item[0],
            'y' => $item[1]
        );
    }
    
}



$url_metro = 'http://api.lima.datosabiertos.pe/datastreams/invoke/ESTAC-GEO-REFER-DEL-TRONC?auth_key=6fde9c6f19a11ed605f0256c1fc020ad4516daa1&output=json_array';
$datos_metro = file_get_contents($url_metro);
$json_metro = json_decode($datos_metro);

$metro = array();
foreach ($json_metro->result as $key => $item) {
    if ($key > 0) {
        $metro[] = array(
            'x' => $item[0],
            'y' => $item[1]
        );
    }
    
}

echo json_encode(array(
    'metro' => $metro,
    'tga' => $tga,
));

