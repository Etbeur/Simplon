<?php
include 'connexion.php';


// On verifie que les champs sont bien remplis
if(!empty($_POST['nom_evenement']) && !empty($_POST['dd']) && !empty($_POST['df']) && !empty($_POST['mail'])){
    if(isset($_POST['nom_evenement']) && isset($_POST['dd']) && isset($_POST['df']) && isset($_POST['mail'])){

        $nom_evenement = $_POST['nom_evenement'];
        $date_debut = $_POST['dd'];
        $date_fin = $_POST['df'];
        $email = $_POST['mail'];

        // On prépare une requête avec PDO pour insérer les données reçues dans la bdd
        $qInsert = "INSERT INTO evenement(titre, date_debut, date_fin, mail_createur) VALUES (:titre, :date_debut, :date_fin, :mail_createur)";
        $rq = $connexion->prepare($qInsert);

        $rq->bindParam(":titre", $nom_evenement, PDO::PARAM_STR);
        $rq->bindParam(":date_debut", $date_debut, PDO::PARAM_STR);
        $rq->bindParam(":date_fin", $date_fin, PDO::PARAM_STR);
        $rq->bindParam(":mail_createur", $email, PDO::PARAM_STR);

        // On execute la requête
        $rq->execute();
        header('location:index.php?ajout');
    }
}else{
    header('location:index.php?vide');
}
 ?>
