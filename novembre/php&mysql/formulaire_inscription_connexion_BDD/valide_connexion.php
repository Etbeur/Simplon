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
if(isset($_POST['email']) && isset($_POST['password'])){

    $email = $_POST['email'];
    $password = $_POST['password'];
    // On vérifie que le mail est bien dans la base de données sinon on retourne une erreur
    $verif_mail = $connexion->query('SELECT COUNT(*) FROM identifiants WHERE mail ="'.$email.'"');
    if($verif_mail->fetchColumn == 0){
        header('location:connexion_compte.php?mailNoExist');
    }
}

// TODO: Vérifier que le password est dans la table et correspond à l'email sinon l'indiquer à l'utilisateur

// TODO: Une fois l'émail correspondant au password on dirige l'utilisateur sur une page lui souhaitant la bienvenue

// TODO: Penser a fermer les connexions au serveur à la fin des appels

 ?>
