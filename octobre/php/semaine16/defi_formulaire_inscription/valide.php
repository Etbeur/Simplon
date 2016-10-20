<?php

// vérification que les valeurs existent
if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmation'])){
    // Si le mot de passe et le mdp de confirmation sont identiques
    if($_POST['password'] == $_POST['confirmation']){
        // Si le mail n'est pas remplit
        if(empty($_POST['email'])){
            // On redirige vers la page de connexion avec un message d'erreur spécifique
                header('location:creation_compte.php?noMail');
        // Sinon si le mdp et la confirmation contiennent plus de 4 caractères
        }elseif(strlen($_POST['password']) > 4 && strlen($_POST['confirmation']) > 4){
            //On créé un message pour indiquer à l'utilisateur qu'un mail lui a été envoyé
            session_start();
            $email = $_POST['email'];
            $_SESSION['user'] = $email;
            $loginPass = "Votre compte a bien été créé, un mail a été envoyé à ";
        }else{
            // Sinon on redirige vers une page spécifiant que les mdp et confirmation n'ont pas assez de caractères
            header('location:creation_compte.php?lenError=1');
        }
    }else{
        // Si le mail et la confirmation ne sont pas identiques
        header('location:creation_compte.php?registrationFalse=1');
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Confirmation inscription</title>
        <link rel="stylesheet" href="style.min.css" media="screen">
    </head>
    <body>
        <div class='nouveau'>
            <?php
            echo $loginPass.$_POST['email'];
            ?>
        </div>
        <div class="deconnexion">
            <a href="creation_compte.php?seeYou=1">Retour</a>
        </div>
    </body>
</html>
