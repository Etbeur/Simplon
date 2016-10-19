<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Formulaire ville</title>
    </head>
    <body>
        <form action= "formulaire_V2.php" method= "post">
            Nom <input type="text" name= "name"/>
            Prénom <input type="text" name="prenom"/></br>
            Ville
            <input type="radio" name="Paris"/>Paris
            <input type="radio" name="Lyon"/>Lyon
            <input type="radio" name="Marseille"/>Marseille</br>
            Majeur <input type="checkbox" name="majeur"></br>
            <button type="submit" name="valider">Valider</button>
    </body>
</html>
