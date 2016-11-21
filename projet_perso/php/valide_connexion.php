<?php

include 'connexion_bdd.php';

// Vérification que les valeurs existent dans la case et qu'elles n'ont pas été laissé vide par le user
if(isset($_POST['login']) && !empty($_POST['login']) && isset($_POST['password']) && !empty($_POST['password'])){

    // Si c'est bon on stock les informations dans des variables
    $login = $_POST['login'];
    $password = $_POST['password'];

    // On crée une requête préparée pour pouvoir vérifier le login et le password que l'utilisateur a saisit
    $qSelection = ('SELECT * FROM utilisateurs WHERE login = :login AND password = :password');
    $req = $connexion->prepare($qSelection);

    $req->bindValue(":login", $login, PDO::PARAM_STR);
    $req->bindValue(":password", $password, PDO::PARAM_STR);
    $req->execute();

    // fetch retournera le résultat de chaque ligne une à une sous forme de tableau
    $resultat = $req->fetch();

    // On ferme la requête
    $req->closeCursor();

    // Si le tableau retourné par fetch contient des données
    if($resultat != null){
        // Si la paire login/password est la bonne
        if($resultat['login'] == $login && $resultat['password'] == $password){
            // On démarre une session, on crée une session utilisateur et on prépare un msg de bienvenue
            session_start();
            $_SESSION['user'] = $login;
            $passOk = "Bienvenue sur le site " .$login ;


        }else{
            // Si mauvaise combinaison, erreur
            header('location:connexion_compte.php?ErrorPassLog');
        }
    }else{
        // Si l'appel a fetch retourne une ligne vide
        header('location:connexion_compte.php?ErrorPassLog');
    }
}else{
    // Si login ou password est inexistant ou vide
    header('location:connexion_compte.php?empty');
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Connexion reussit</title>
        <link rel="stylesheet" href="../css/style.min.css"/>
    </head>
    <body>
        <div id="connexion_reussit">

            <!-- Phrase d'accueil lorsque la connexion est bonne -->

        <?php
            if($login){
                echo '<div>'. $passOk . ' <a href="index.php">Clique ici pour accéder au menu</a></div>';
            }
        ?>

        </div>
    </body>
</html>
