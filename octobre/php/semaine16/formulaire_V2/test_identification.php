<?php
session_start();
//définition de constantes pour les données fictives de l'utilisateur
define('USER_MAIL', "toto@gmail.com");
define('USER_PASS', "12345");
define('USER_LASTNAME', "Leponge");
define('USER_FIRSTNAME', "Bob");

function go($path){
    header('location:'.$path);
}

function backToLogin($log){
    go('identification.php'.$log);
}

$errorMessage = '';
$savedLogin = '';

// On vérifie si les valeur email et pass existe
if(isset($_POST['email']) && isset($_POST['password'])){

    // si les infos existe, on stock l'email et le pass
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Vérification si email = USER_MAIL et password = USER_PASS
    if($email == USER_MAIL && $password == USER_PASS){
        /* si correspondance: on crée un objet $User qui contient les infos qu'on connait de l'utilisateur
            (comme une base de données)*/
        $user = [
            "nom" => USER_LASTNAME,
            "prenom" => USER_FIRSTNAME,
            "mail" => USER_PASS
        ];

        // On enregistre la session utilisateur
        $_SESSION['user'] = $user;
        go('bienvenue.php');
    }else{

        $savedLogin = 'value="'.$login.'""';
        $errorMessage = '<div class="alert alert-danger">Erreur d\'identification</div>';
        backToLogin("?errorLogin=1&withLogin=".$login);
    }
}else {
    backToLogin("");
}
?>
