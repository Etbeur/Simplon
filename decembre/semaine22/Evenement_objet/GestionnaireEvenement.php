<?php

include_once 'IChargeurJson.php';
include_once 'ChargeurJsonAPI.php';



/**
 *   Class Gestionnaire évènement
 *
 * objet chargé de gérer les évènements
 * - récupération à parti de l'API Google
 * - enregistrement en bdd
 */
class GestionnaireEvenement{

    /**
    * @var PDO
    */
    private $db;


    /**
    * charge les events sous forme de json en texte brut à partir d'une url calendar
    * @param string|url $url url api google de la forme "https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI"
    * @param IChargeurJson $chargeur
    * @return array
    */

    public function importEvenements( $url, IChargeurJson $chargeur){

        $data = $chargeur->$charge($url);
        $eventsData = $data['items'];

        /* comment passer de données tabeau assoc.
             à une liste d'objets events
        */

        $events = array_map( function($t){
            $ev = new Evenement();
        });
    }

}



?>
