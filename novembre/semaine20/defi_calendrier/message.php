<?php

if(isset($_GET['vide'])){
    echo '<div>Tous les champs sont obligatoires</div>';
}elseif(isset($_GET['ajout'])){
    echo '<div>Votre évènement a été ajouté</div>';
}elseif(isset($_GET['delete'])){
    echo '<div>Votre évènement a bien été supprimé</div>';
}elseif(isset($_GET['modif'])){
    echo '<div>Un évènement a été modifié</div>';
}

?>
