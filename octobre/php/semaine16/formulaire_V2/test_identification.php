<?php
//définition de constantes pour les données fictives de l'utilisateur
define('USER_MAIL', "toto@gmail.com");
define('USER_PASS', "12345");
define('USER_LASTNAME', "Leponge");
define('USER_FIRSTNAME', "Bob");

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

        $loginFailed = false;
        include 'bienvenue.php';
    }else{
        // Sinon si l'email/pass ne correspondent pas on crée une variable pour l'indiquer
        $loginFailed = true;
        $savedLogin = 'value="'.$login.'""';
        $errorMessage = '<div class="alert alert-danger">Erreur d\'identification</div>';
        header("Location: identification.php?erreur=1");
    }
}else {
    echo "Les variables du formulaire ne sont pas déclarées";
}
?>
