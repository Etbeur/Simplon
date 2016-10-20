<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Bievenue sur mon site</title>
        <style media="screen">
            header{
                background-color: #098;
                padding-top: 40px;
                color: #fff;
                font-size: 2em;
                font-weight: bold;
                text-align: center;
            }
            a{
                position: relative;
                bottom: 100px;
                float: right;
                color: #db1740;
            }
            h1{
                text-align: center;
            }

        </style>
    </head>
    <body>
        <div id="container">
            <?php
                if(isset($_SESSION['user'])){
                echo '<header><h1>Mon Site</h1></header>';
                echo "<h1>Bienvenue " . $user["prenom"] . " " . $user["nom"] . "</h1>";
                    if(isset($_SESSION['user'])){
                        echo '<a href="fin_session.php">Déconnexion</a>';
                    }
            }
            ?>
        </div>
    </body>
</html>
