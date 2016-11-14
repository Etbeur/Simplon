<?php
// On inclus le fichier de connexion à la base de donnée
include 'connexion.php';

// On sélectionne les données que l'on veut depuis la BDD
$requete = "SELECT * FROM pays";
$result = $connexion->query($requete);

?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Confirmation ajout ligne</title>
        <link rel="stylesheet" href="style.min.css" media="screen">
    </head>
    <style media="screen">
        .pays{
            text-align: center;
            font-weight: bold;
        }
        .capitale{
            text-align: center;
            font-weight: bold;
        }
        img{
            width: 50px;
            height: 30px;
            margin-bottom: 8px;
        }
        #tableau{
            width: 50%;
        }
        .conteneur{
            display: flex;
            justify-content: center;
        }

    </style>
    <body>
        <div class="conteneur">
            <table id="tableau">
                  <tr>
                      <th>Pays</th>
                      <th>Capitale</th>
                      <th>Drapeau</th>
                      <th>Langue(s)</th>

                  </tr>

                  <?php
                //   Boucle while pour récupérer les données
                      while($donnee = $result->fetch() ){
                          $nomPays = $donnee['nom'];
                          $nomCapitale = $donnee['capitale'];
                          $imgDrapeau = $donnee['drapeau'];
                  ?>

                  <tr>
                     <!-- On affiche les données Pays/Capitale et drapeau. Les fonctions supprimer et modifier à venir-->
                      <td><?php echo $nomPays?></td>
                      <td><?php echo $nomCapitale?></td>
                      <td><img src="<?php echo $imgDrapeau?>"></td>
                      <td>A venir</td>
                      <td><button type="submit" name="supprimer">Supprimer</button></td>
                      <td><button type="submit" name="modifier">Modifier</button></td>


                  </tr>

                  <?php
                        }
                        // On ferme l'appel à la BDD
                    $result->closeCursor();
                   ?>

              </table>
        </div>
    </body>
</html>
