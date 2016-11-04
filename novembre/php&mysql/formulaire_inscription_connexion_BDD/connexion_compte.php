<?php
// Fonction qui affichera le message d'erreur adéquat
function errorMessage(){
    // Si le password n'est pas correct
    if(isset($_GET['registrationFalse'])){
        echo '<div class="alert alert-danger" role="alert">Votre mot de passe est inconnus</div>';
        // Sinon si la longueur du password est inférieure à 4 caractères
    } elseif(isset($_GET['lenError'])){
        echo '<div class="alert alert-danger" role="alert">Votre mot de passe doit faire plus de 4 caractères.</div>';
        // Sinon si le mail n'est pas remplit
    } elseif(isset($_GET['noMail'])){
        echo '<div class="alert alert-danger" role="alert">Veuillez indiquer votre adresse de messagerie.</div>';
    }elseif(isset($_GET['mailNoExist'])){
        echo '<div class="alert alert-danger" role="alert">Cet email n\'existe pas.</div>';
    }
}

// Fonction qui confirmera à l'utilisateur que son compte a été créé
function ciao(){
    if(isset($_GET['goodBye'])){
        echo '<div class="alert alert-success" role="alert">A bientôt sur ce site.</div>';
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Création compte</title>
        <link rel="stylesheet" href="style.min.css" media="screen">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head>
    <body>
        <form action="valide_connexion.php" method="post" class="form-horizontal">
        <div class ="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                        <h1 class="text-center">Connexion</h1>
                        </div>
                            <?php
                                echo errorMessage();
                                echo bienvenue();
                            ?>
                        <div class="panel-body">
                            <label>Adresse Email</label>
                            <input type="email" name= "email" placeholder="Email" class="form-control"/></br>

                            <label>Password </label>
                            <input type="password" name="password" placeholder="Password" class="form-control"/></br>

                            <button type="submit" class="btn btn-default" name="valider">Valider</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
