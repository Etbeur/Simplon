<?php
include 'connexion.php';

$requete = "SELECT * FROM evenement";
$resultat = $connexion->query($requete);

if(isset($_GET['orderC'])){
    $requete = "SELECT * FROM evenement ORDER BY date_debut";
    $resultat = $connexion->query($requete);
}else if(isset($_GET['orderD'])){
    $requete = "SELECT * FROM evenement ORDER BY date_debut DESC";
    $resultat = $connexion->query($requete);
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Affichage evenement</title>

    </head>
    <body>
        <div class="conteneur_affichage">
            <h1>Evenement programmés</h1>
            <table id="tableau">
                  <tr>
                      <th>Nom</th>
                      <th><a href="index.php?orderC">Date de début</th>
                      <th><a href="index.php?orderD">Date de fin</th>
                      <th>Email du Créateur</th>
                  </tr>

            <?php
                // Boucle while afin de récupérer les données
                while($data = $resultat->fetch() ){
                    $id_event = $data['id_evenement'];
                    $nom = $data['titre'];
                    $dd = $data['date_debut'];
                    $df = $data['date_fin'];
                    $mail = $data['mail_createur'];

             ?>
             <tr>
                <!-- On affiche les données que l'on a récupéré de la bdd-->
                 <td><?php echo $nom ?></td>
                 <td><?php echo $dd ?></td>
                 <td><?php echo $df ?></td>
                 <td><?php echo $mail ?></td>
                 <td><a href="suppression.php?id=<?php echo $id_event ?> "><button type="button" name="supprimer">Supprimer</button></a></td>
                 <td><a href="modification_data.php?id=<?php echo $id_event ?> "><button type="submit" name="modifier">Modifier</button></td>
             </tr>
             <?php
                }
              ?>
        </div>
    </body>
</html>
