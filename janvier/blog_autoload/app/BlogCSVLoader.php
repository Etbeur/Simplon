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

    /**
     * @param String $path
     * @return array
     */
    public function load(String $path):array
    {
        $rawData = file_get_contents($path);
        return $this->parseCSV($rawData);
    }

    /**
     * @param String $rawData
     * @return array
     */
    public function parseCSV(String $rawData){
        $lines = explode(PHP_EOL, $rawData);
        $csvParse = array();
        foreach ($lines as $line) {
            $csvParse[] = str_getcsv($line);
        }
        var_dump($csvParse);
        $articles = array_map(function($article){
            $author = new Author(
                $article[0],
                $article[1],
                $article[2]
            );print_r($author);
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