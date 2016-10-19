<?php
    $titre = "QCM pays";


 ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title><?php echo $titre ?></title>
    </head>
    <body>
<?php
    $question = "Quel pays qui correspont à ce drapeau?";

    echo "<p>". $question . "</p>";
 ?>

        <form action="question.php">
            <form action="q.php" method="get">
                <input type="radio" name="reply1" value="La France"/>La France
                <input type="radio" name="reply2" value="L'Italie"/>L'Italie
                <input type="radio" name="reply3" value="La France"/>Le Royaume-Uni
                <input type="radio" name="reply4" value="L'Allemagne"/>L'Allemagne
                <input type="hidden" name="pageId"
                   value="<?php echo $pageId; ?>">
            <button type="submit">Valider</button>
            </form>
        </form>


    </body>
</html>
