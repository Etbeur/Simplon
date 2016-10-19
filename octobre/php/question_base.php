<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Test questions</title>
    </head>
    <body>
<?php
$questions = [
    [
        "question" => 'Quel est la couleur ducheval blanc d\'Henry 4?',
        "reponse" => 'blanc'
    ],
    [
        "question" => 'Combien sont les 7 nains?',
        "reponse" => '7'
    ]
];

$pageId = isset($_GET['pageId']) ? intval($_GET['pageId']) : 0;

$nextPageId = $pageId + 1;

if($pageId > count($questions)){
    echo "<h1>Terminé</h1>";
} else{

    $currentQuestion = $questions[$pageId];

    echo "<h1>".$currentQuestion['question']."</h1>";
    echo "<a href=\"question_base.php?pageId=$nextPageId\">Question suivante</a>";
}

?>
    </body>
</html>
