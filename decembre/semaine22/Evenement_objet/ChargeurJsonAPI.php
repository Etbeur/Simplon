<?php

    class ChargeurJsonAPI implements IChargeurJson {

        public function charge( $url ){

            // On initialise la session curl qui permet de récupérer les données d'une url distante
            $ch = curl_init();

            // Configuration de l'URL et d'autre option
            curl_setopt($ch, CURLOPT_URL, "https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI");
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            // Récupération des données de l'URL et affichage dans le navigateur
            $recupData = curl_exec($ch);

            // Fermeture de la session
            curl_close($ch);

            // 2nd paramètre de json_decode
            //stdClass par défault monObjet->maPropriete
            //assoc = true par défault monObjet['maPropriete']
            return json_decode($recupData, true);
    }
}
 ?>
