<?php
    $name = isset($_POST['name']) && $_POST['name']!=""
    ? $_POST['name']:
    'non renseigné';

    echo '<h1>'."Votre nom est ".$name .'</h1>';
?>
