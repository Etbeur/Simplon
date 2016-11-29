<?php
// On inclus la base de donnée
include 'connexion.php';

// Si les valeurs existe
if(isset($_POST['nom']) && isset($_POST['capitale']) && isset($_POST['drapeau']) && isset($_POST['id'])){

    // On ajoute les valeurs dans des variables
    $nom = $_POST['nom'];
    $capitale = $_POST['capitale'];
    $drapeau = $_POST['drapeau'];
    $id = $_POST['id'];

    // On prépare une requête  avec PDO pour mettre à jour la base de données avec les données rentrées par l'utilisateur
    $qUpdate = "UPDATE pays SET nom=:nom, capitale=:capitale, drapeau=:drapeau WHERE id_pays=$id";
    $rqU = $connexion->prepare($qUpdate);

    $rqU->bindParam(":nom", $nom, PDO::PARAM_STR);
    $rqU->bindParam(":capitale", $capitale, PDO::PARAM_STR);
    $rqU->bindParam(":drapeau", $drapeau, PDO::PARAM_STR);

    $rqU->execute();
    // On redirige vers la page d'accueil ou tout est affiché
    header('location:index.php');
}

?>
