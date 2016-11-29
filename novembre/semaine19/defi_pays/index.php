<?php
// Fonction qui affichera les message d'erreur ou de validation
function infosUtilisateur(){
    // Si la page ajout critère renvoie vers index avec vide --> header('location:index.php?vide')
    if(isset($_GET['vide'])){
        echo '<div class="alert alert-danger" role="alert">Vous n\'avez pas indiqué tous les champs pour l\'ajout d\'un pays</div>';
    // Si la page ajout critère renvoie vers index avec ajoutOk --> header('location:index.php?ajoutOk')
    }elseif(isset($_GET['ajoutOk'])){
        echo '<div class="alert alert-success" role="alert">Votre ajout est validé</div>';

    // Si la page ajout critère renvoie vers index avec exist --> header('location:index.php?exist')
    }elseif(isset($_GET['exist'])){
        echo '<div class="alert alert-danger" role="alert">Valeurs déjà existantes</div>';

    // Si le champ langue est vide
    }elseif(isset($_GET['langueVide'])){
        echo '<div class="alert alert-danger" role="alert">Le champ langue est resté vide</div>';
    }
}
?>

<!DOCTYPE html>
 <html>
     <head>
         <meta charset="utf-8">
         <title>Création pays</title>
         <link rel="stylesheet" href="style.min.css" media="screen">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
         integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

         <style media="screen">
            body{
                margin: 0 auto;
                font-family: Helvetica, Arial, sans-serif;
                line-height: 1.5;
                background-color: silver;
            }
            #container{
                text-align: center;
                margin-top: 30px;
                margin-bottom:20px;
            }
            #container2{
                text-align: center;
                margin-top: 20px;
            }
            .form-group{
                margin-left: 10px;
            }
         </style>
     </head>
     <body>
         <form action="ajout_critere.php" method="post" class="form-inline">
             <h1 class="text-center">Informations Pays</h1>
                 <?php
                //  Message qui s'affichera à l'écran en fonction des données saisies
                    echo infosUtilisateur();
                 ?>
            <div id="container">
                 <div class="form-group" >
                     <label>Pays</label>
                     <input type="text" name="nom" placeholder="Pays" class="form-control input-md-6"/></br>
                 </div>
                 <div class="form-group">
                     <label>Capitale</label>
                     <input type="text" name="capitale" placeholder="La capitale" class="form-control"/></br>
                 </div>
                 <div class="form-group">
                     <label>Drapeaux</label>
                     <input type="text" name="drapeau" placeholder="url de l'image" class=" form-control"/></br>
                 </div>
                     <button type="submit" class="btn btn-default" name="valider_infos">Valider</button>
             </div>

             <?php include 'affichage.php';?>

             <div id="container2">
                 <div class="form-group">
                     <label>Langue(s)</label>
                     <input type="text" name="langue" placeholder="Langue(s) parlée(s)" class=" form-control"/></br>
                     <input type="hidden" name="modifier" value="modif">
                 </div>
                    <button type="submit" class="btn btn-default" name="valider_langue">Valider</button>
             </div>
         </form>
     </body>
 </html>
