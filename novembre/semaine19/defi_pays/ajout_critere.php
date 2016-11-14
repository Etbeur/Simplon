<?php
include 'connexion.php';

if(!empty($_POST['nom']) && !empty($_POST['capitale']) && !empty($_POST['drapeau'])){
    if(isset($_POST['nom']) && isset($_POST['capitale']) && isset($_POST['drapeau'])){
        $nom = $_POST['nom'];
        $capitale = $_POST['capitale'];
        $drapeau = $_POST['drapeau'];

        $qInsert = "INSERT INTO pays(nom,capitale,drapeau) VALUES(:nom, :capitale, :drapeau)";
        $rqt = $connexion->prepare($qInsert);

        $rqt->bindParam(":nom", $nom, PDO::PARAM_STR);
        $rqt->bindParam(":capitale", $capitale, PDO::PARAM_STR);
        $rqt->bindParam(":drapeau", $drapeau, PDO::PARAM_STR);

        $existante = $rqt->execute();

        header('location:index.php?ajoutOk');
    }
}else{
    header('location:index.php?vide');
}

if(count($existante) == 1){
    header('location:index.php?exist');
}

if(!empty($_POST['langue'])){
    if(isset($_POST['langue'])){
        $langue = $_POST['langue'];

        $insert = "INSERT INTO langue(langue) VALUES(:langue)";
        $rq = $connexion->prepare($insert);

        $rq->bindParam(':langue', $langue, PDO::PARAM_STR);
        $rq->execute();

        header('location:index.php?ajoutOk');
    }else{
        header('location:index.php?vide');
    }
}

?>
