<?php
    session_start();
    session_destroy();
    header('location:creation_compte.php?seeYou=1');
 ?>
