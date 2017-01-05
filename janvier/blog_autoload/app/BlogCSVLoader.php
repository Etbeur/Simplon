<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:03
 */
/**
 * Class BlogCSVLoader charge les articles depuis fichier csv
 * id / title / content / date / authorId / firstname / lastname
 */
class BlogCSVLoader extends BlogJsonLoader{
    function parseCSV(String $rawData){
        $csvParse = array_map('str_getcsv', file($rawData));
        $articles = array_map(function($article){
            $author = new Author(
                $article[0],
                $article[1],
                $article[2]
            );
            return new Article(
                $article[3],
                $article[4],
                $article[5],
                $author,
                new DateTime($article[7])
            );
        },$csvParse);
        return $articles;
    }
}