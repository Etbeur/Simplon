<?php
include 'connexion.php';

if(isset($_GET['id'])){
    $id = $_GET['id'];

    if(is_numeric($id)){

        $qdelete = "DELETE FROM evenement WHERE id_evenement = $id";
        $rqD = $connexion->prepare($qdelete);

        $rqD->bindParam(":id", $id, PDO::PARAM_INT);
        $rqD->execute();
        header('location:index.php?delete');
    }
}
 ?>
