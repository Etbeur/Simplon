<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:26
 */
class ChoixProduit
{
    public $produit;
    public $number;

    public function __construct($produit, $number)
    {
        $this->produit = $produit;
        $this->number = $number;
    }
}