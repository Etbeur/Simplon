<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Modifier champs</title>
        <link rel="stylesheet" href="style.min.css" media="screen" charset="utf-8">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.indigo-pink.min.css">
        <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script>
    </head>
    <body>
        <form action="envoie_modification.php" method="post" id="formulaire" >
            <input type="hidden" name="id" value="<?php echo $_GET['id']?>">

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="nom_evenement" name="nom_evenement">
            <label class="mdl-textfield__label" for="nom_evenement">Nom de l'évènement*</label>
          </div> </br>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="date" id="dd" name="dd">
          </div> </br>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="date" id="df" name="df">

          </div> </br>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="mail" name="mail">
              <label class="mdl-textfield__label" for="mail">Email du créateur de l'évènement*</label>
          </div> </br>

          <button type="submit" id="valider" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--colored">
              Valider modification
          </button>

        </form>
    </body>
</html>
