<?php
/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:35
 */

spl_autoload_register(function($class){
    include "app/".$class.".php";
} );

$loader = new BlogCSVLoader();
$articles = $loader->load('blog2.csv');
$blog = new Blog('Vive la POO', $articles);

?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $blog->title ?></title>
</head>
<body>
<?= $blog->displayHeader(); ?>
<?= isset($_GET['articleId']) ? $blog->displayArticle($_GET['articleId']) : $blog->displayArticleList(); ?>
<?= $blog->displayFooter(); ?>
</body>
</html>
