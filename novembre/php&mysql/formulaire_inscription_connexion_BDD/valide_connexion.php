<?php

try {
    // Ouverture d'une connexion à la base de données
    $connexion = new PDO(
        //!!! dbname est le nom de la base de donnée et pas de la table !!!
        'mysql:host=localhost; dbname=defi_formulaire;charset=utf8',
        'root', 'root');
} catch(Exception $excp){
    die('Erreur : ' . $excp->getMessage());
}



// Vérification si adresse mail est identique à mot de passe dans base de donnée
if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['password']) && !empty($_POST['password'])){

    $email = $_POST['email'];
    $password = $_POST['password'];

    // On crée une requête préparée pour pouvoir vérifier le mail et le password que l'utilisateur a saisit
    $qSelection = ('SELECT * FROM identifiants WHERE mail = :mail AND password = :password');
    $req = $connexion->prepare($qSelection);

    $req->bindValue(":mail", $email, PDO::PARAM_STR);
    $req->bindValue(":password", $password, PDO::PARAM_STR);
    $req->execute();

    // fetch retournera le résultat de chaque ligne une à une sous forme de tableau
    $resultat = $req->fetch();

    // On ferme la requête
    $req->closeCursor();

    // Si le tableau retourné par fetch contient des données
    if($resultat != null){
        // Si la paire mail/password est la bonne
        if($resultat['mail'] == $email && $resultat['password'] == $password){
            // On démarre une session, on crée une session utilisateur et on prépare un msg de bienvenue
            session_start();
            $_SESSION['user'] = $email;
            $passOk = "Bienvenue sur le site ";
        }else{
            // Si mauvaise combinaison, erreur
            header('location:connexion_compte.php?ErrorPassLog');
        }
    }else{
        // Si l'appel a fetch retourne une ligne vide
        header('location:connexion_compte.php?ErrorPassLog');
    }
}else{
    // Si mail ou password est inexistant ou vide
    header('location:connexion_compte.php?empty');
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
            // Si une session existe on affiche le msg de bienvenue
            if($_SESSION['user']){
                echo $passOk . $_POST['email'];
            }
            ?>
        </div>
        <div class="deconnexion">
            <a href="connexion_compte.php?bye=1">Deconnexion</a>
        </div>
    </body>
</html>
