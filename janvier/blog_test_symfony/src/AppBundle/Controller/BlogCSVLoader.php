<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:03
 */

namespace AppBundle\Controller;

use AppBundle\Model\Author;
use AppBundle\Model\Article;
use AppBundle\Controller\BlogJsonLoader;
use AppBundle\Controller\IBlogLoader;

/**
 * Class BlogCSVLoader charge les articles depuis fichier csv
 * id / title / content / date / authorId / firstname / lastname
 */

class BlogCSVLoader{

    public function load(String $path):array
    {
        $rawData = file_get_contents($path);
        return $this->parseCSV($rawData);
    }

    function parseCSV(String $rawData){
        $test = explode(PHP_EOL, $rawData);
        $csvParse = array_map('str_getcsv', $test);
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
                new \DateTime($article[7])
            );
        },$csvParse);

        return $articles;
    }
}