<?php
include 'connexion.php';

if(isset($GET['id'])){
    $id = $GET['id'];

    if(is_numeric($id)){
        $qselect = "SELECT titre, date_debut, date_fin, mail_createur FROM evenement WHERE id_evenement=:id";
        $rqS = $connexion->prepare($qselect);

        $rqS->bindParam(":id_evenement", $id, PDO::PARAM_INT);
        $rqS->execute();
        header('location:modification_data.php');
    }
}
 ?>
