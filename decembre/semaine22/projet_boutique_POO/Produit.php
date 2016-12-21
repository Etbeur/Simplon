<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:20
 */
class Produit
{
    public $nom;
    public $prixHT;

    public function  __construct($nom = null, $prixHT = null)
    {
        if($nom)
            $this->nom = $nom;
        if($prixHT)
            $this->prixHT = $prixHT;
    }
    function __toString()
    {
        return "$this->nom </br>
                $this->prixHT";
    }
}