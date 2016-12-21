<?php
include_once 'ChargeurJsonFile.php';
include_once 'Produit.php';
/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:22
 */
class ChargeurProduit
{
    public function charge(String $file, ChargeurJsonFile $chargeur):array
    {
        $data = $chargeur->charge($file);
        $listeDonneeProduit = $data['produits'];

        $liste_produits = array_map(function($donneeProduit)
        {
            $p = new Produit();

            if(isset($donneeProduit['nom']))
                $p->nom = $donneeProduit['nom'];
            if(isset($donneeProduit['prixHT']))
                $p->prixHT = $donneeProduit['prixHT'];

            return $p;
        }, $listeDonneeProduit);

        return $liste_produits;
    }

}

