<?php
/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:26
 */
include_once "VueProduit.php";
$json = "produits_nom_prix.json";

$chargeurProduit = new ChargeurProduit();
$chargeur = new ChargeurJsonFile($json);

$liste_produits = $chargeurProduit->charge($json,$chargeur);

$vueProduit = new VueProduit($liste_produits);
$vueProduit->afficheListeProduits();


?>


<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Produit/Panier</title>
</head>
<body>

<h1><?php ?></h1>

</body>
</html>