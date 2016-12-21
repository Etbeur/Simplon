<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:21
 */
include_once 'ChargeurProduit.php';
include_once 'ChargeurJsonFile.php';


class VueProduit
{
    public $liste_produits;

    public function __construct(array $produits)
    {
        $this->liste_produits = $produits;
    }

    function afficheListeProduits()
    {

        foreach ($this->liste_produits as $id => $produit)
        {
            echo "<p>" .$produit. "</p>";
            echo "<input type='number' name='quantite'>";
            echo "<a href='index.php?ajoutId=$id'><button type='submit' name='ajoutProduit'> + </button></a>";
        }

        if(isset($_GET['ajoutId']))
        {
            $id = $_GET['ajoutId'];
        }
    }
    
}