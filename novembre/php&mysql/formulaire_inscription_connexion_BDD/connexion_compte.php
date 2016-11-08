<?php
// Fonction qui affichera le message d'erreur adéquat
function errorMessage(){
    // Si le mot de passe ou le mail est incorrect
    if(isset($_GET['ErrorPassLog'])){
        echo '<div class="alert alert-danger" role="alert">Email ou mot de passe incorrect</div>';
        // Sinon si des champs ne sont pas rempli
    }elseif(isset($_GET['empty'])){
        echo '<div class="alert alert-danger" role="alert">Veuillez remplir tous les champs</div>';
        // Sinon si l'utilisateur se déconnecte
    }elseif(isset($_GET['bye'])){
        echo '<div class="alert alert-success" role="alert">A bientôt sur notre site</div>';
    }
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Connexion compte</title>
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
                        <a id="aller_inscription" class="text-center" href="creation_compte.php">Vous n'avez pas encore de compte?</a>
                        </div>
                            <?php
                                echo errorMessage();
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
