<?php
include 'connexion.php';


// On verifie que les champs sont bien remplis
if(isset($_POST['nom_evenement']) && isset($_POST['dd']) && isset($_POST['df']) && isset($_POST['mail']) && isset($_POST['id'])){

    $nom_evenement = $_POST['nom_evenement'];
    $date_debut = $_POST['dd'];
    $date_fin = $_POST['df'];
    $email = $_POST['mail'];
    $id = $_POST['id'];

    $qUpdate = "UPDATE evenement SET titre=:titre, date_debut=:date_debut, date_fin=:date_fin, mail_createur=:mail_createur WHERE id_evenement=$id";
    $rqU = $connexion->prepare($qUpdate);

    $rqU->bindParam(":titre", $nom_evenement, PDO::PARAM_STR);
    $rqU->bindParam(":date_debut", $date_debut, PDO::PARAM_STR);
    $rqU->bindParam(":date_fin", $date_fin, PDO::PARAM_STR);
    $rqU->bindParam(":mail_createur", $email, PDO::PARAM_STR);

    $rqU->execute();
    header('location:index.php?modif');
}
