<?php

include_once 'Evenement.php';
include_once 'IChargeurJson.php';
include_once 'ChargeurJsonAPI.php';
include_once 'ChargeurJsonFile.php';
include_once 'GestionnaireEvenement.php';

define('API_PATH', "https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI");


$gestionnaire = new GestionnaireEvenement();
$chargeur = new ChargeurJsonAPI();

$importedEvents = $gestionnaire->importEvenements(API_PATH, $chargeur);

echo "nom d'items: ".count($importedEvents)."<br/>";

foreach($importedEvents as $ev){
    echo '<p>'. $ev . '</p>';
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Test Evenement</title>
    </head>
    <body>
        <h1><?php  ?></h1>
    </body>
</html>
