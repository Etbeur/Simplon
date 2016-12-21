<?php

    class ChargeurJsonFile implements IChargeurJson {

        public function charge( $url ){

            // On récupère les données du fichier JSON concerné
            $data = file_get_contents( '$url' );

            // 2nd paramètre de json_decode
            //stdClass par défault monObjet->maPropriete
            //assoc = true par défault monObjet['maPropriete']
            return json_decode($data, true);
    }
}

 ?>
