<?php
// On inclus le fichier de connexion à la base de donnée
include 'connexion.php';

// Si les champs ne sont pas vides
if(!empty($_POST['nom']) && !empty($_POST['capitale']) && !empty($_POST['drapeau'])){
    // On vérifie que les champs contiennent des données
    if(isset($_POST['nom']) && isset($_POST['capitale']) && isset($_POST['drapeau'])){
        $nom = $_POST['nom'];
        $capitale = $_POST['capitale'];
        $drapeau = $_POST['drapeau'];

        // On insère les données dans la BDD en utilisant une requête préparée avec PDO
        $qInsert = "INSERT INTO pays(nom,capitale,drapeau) VALUES(:nom, :capitale, :drapeau)";
        $rqt = $connexion->prepare($qInsert);

        $rqt->bindParam(":nom", $nom, PDO::PARAM_STR);
        $rqt->bindParam(":capitale", $capitale, PDO::PARAM_STR);
        $rqt->bindParam(":drapeau", $drapeau, PDO::PARAM_STR);

        $existante = $rqt->execute();

        // On redirige vers la page d'accueil avec un message de validation
        header('location:index.php?ajoutOk');
    }
    // Si aucun champ remplit, on redirige sur la page d'accueil avec un message d'erreur
}else{
    header('location:index.php?vide');
}

// On vérifie si les données rentrées sont déjà présentes dans la BDD
if($existante == false){
    // On redirige sur la page d'accueil avec un message d'erreur
    header('location:index.php?exist');
}

// Si le champ langue n'est pas vide
if(!empty($_POST['langue'])){
    // Si le champ langue contient des données
    if(isset($_POST['langue'])){
        $langue = $_POST['langue'];

        // Insertion des données dans la BDD avec une requête préparée avec PDO
        $insert = "INSERT INTO langue(langue) VALUES(:langue)";
        $rq = $connexion->prepare($insert);

        $rq->bindParam(':langue', $langue, PDO::PARAM_STR);
        $rq->execute();

        // Si tout est ok on redirige vers la page d'accueil avec un message de validation
        header('location:index.php?ajoutOk');
    }
// Si le champ n'est pas remplit on redirige sur la page d'accueil avec un msg d'erreur
}elseif(empty($_POST['langue']) && empty($_POST['nom']) && empty($_POST['capitale']) && empty($_POST['drapeau'])){
    header('location:index.php?langueVide');
}
?>
