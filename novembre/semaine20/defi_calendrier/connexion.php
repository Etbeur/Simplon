<?php
    // Connexion à la base de donnée
try {
    $connexion = new PDO(
        'mysql:host=localhost; dbname=defi_calendrier; charset-utf-8',
        'root','root');
} catch (Exception $e) {
    die('Erreur: ' . $e->getMessage());
}


 ?>
