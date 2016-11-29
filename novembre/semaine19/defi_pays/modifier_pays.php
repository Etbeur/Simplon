<?php
// On inclus le fichier de connexion à la base de donnée
include 'connexion.php';

// On récupère l'id qui correspond  à la ligne il y a le clique
if(isset($_GET['id'])){
    $id = $_GET['id'];
    // Si id est bien un chiffre
    if(is_numeric($id)){
        // On sélectionne les données dans pays correspondant à l'id qu'on a récupéré
        $qselect = "SELECT * FROM pays WHERE id_pays=$id";
        $rqS = $connexion->query($qselect);

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
         <?php
       //   Boucle while pour récupérer les données
             while($donnee = $rqS->fetch() ){
                 $nomPays = $donnee['nom'];
                 $nomCapitale = $donnee['capitale'];
                 $imgDrapeau = $donnee['drapeau'];
         ?>

         <form action="ajout_modification.php" method="post" class="form-inline">
             <input type="hidden" name="id" value="<?php echo $_GET['id']?>">
             <h1 class="text-center">Modifier pays</h1>
            <div id="container">
                 <div class="form-group" >
                     <label>Pays</label>
         <!-- Balises php qui permettent d'afficher le nom du pays et la capitale et le drapeau afin de modifier seulement la valeur souhaitée -->
                     <input type="text" name="nom" placeholder="Pays" value="<?php echo $nomPays ?>" class="form-control input-md-6"/></br>
                 </div>
                 <div class="form-group">
                     <label>Capitale</label>
                     <input type="text" name="capitale" placeholder="La capitale" value="<?php echo $nomCapitale ?>" class="form-control"/></br>
                 </div>
                 <div class="form-group">
                     <label>Drapeaux</label>
                     <input type="text" name="drapeau" placeholder="url de l'image" value="<?php echo $imgDrapeau ?>" class=" form-control"/></br>
                 </div>
                     <button type="submit" class="btn btn-default" name="valider_infos">Valider</button>
             </div>
         </form>
         <?php } ?>
     </body>
 </html>
