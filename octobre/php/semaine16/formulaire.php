<?php

$titre = "Formulaire";
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> <?php echo $titre ?></title>
    </head>
    <body>
        <?php
            $nom = isset($_GET['nom']) && $_GET['nom']!=""
            ? $_GET['nom']:
            ' non renseigné';
            echo '<h1>'."votre nom est " .$nom .'</h1>';
            ?>

            <form action="formulaire.php" method="get">
                <input type="input" name="nom"/>
                <button type="submit">Valider</button>
    </body>
</html>
