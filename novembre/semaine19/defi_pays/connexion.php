<?php
// Ouverture connexion à la base de donnée
try {
    $connexion = new PDO(
        'mysql:host=localhost; dbname=defi_pays;charset-utf-8',
        'root', 'root');
} catch (Exception $e) {
    die('Erreur : ' . $e->getMessage());
}

?>
