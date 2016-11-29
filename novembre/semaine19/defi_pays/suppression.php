<?php
// On inclus le fichier de connexion à la base de donnée
include 'connexion.php';

// On récupère l'id du pays sélectionné
if(isset($_GET['id'])){
    $id = $_GET['id'];
    // Si l'id est bien un chiffre
    if(is_numeric($id)){

        // on supprime les données de la base ou l'id pays est égal à l'id récupéré
        $qdel = "DELETE FROM pays WHERE id_pays = $id";
        $req = $connexion->prepare($qdel);

        $req->bindParam(":id", $id, PDO::PARAM_INT);
        $req->execute();
        // redirection vers la page d'accueil ou les pays et langues sont affchés
        header('location:index.php');
    }
}
// Même cheminement pour supprimer une langue
if(isset($_GET['id'])){
    $id = $_GET['id'];
    // Si id est bien un chiffre
    if(is_numeric($id)){
        // Suppression de la table langue ou id langue est égal à id récupéré
        $qdel = "DELETE FROM langue WHERE id_langue = $id";
        $req = $connexion->prepare($qdel);

        $req->bindParam(":id", $id, PDO::PARAM_INT);
        $req->execute();
        // redirection vers la page d'accueil ou les pays et langues sont affchés
        header('location:index.php');
    }
}

?>
