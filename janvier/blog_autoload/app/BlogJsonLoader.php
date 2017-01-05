<?php
/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:02
 */
class BlogJsonLoader implements IBlogLoader{
    /**
     * @param String $path
     * @return array
     */
    public function load(String $path):array
    {
        $rawData = file_get_contents($path);
        return $this->parse($rawData);
    }
    /**
     * parse les données JSON et renvoie une liste d'articles
     * @param String $rawData donnees json_decodées
     * @return array
     */
    public function parse(String $rawData):array
    {
        $rawAuthors = json_decode($rawData, true)['authors'];
        $authors = array_map(function ($rawAuthor){
            return new Author(
                $rawAuthor['id'],
                $rawAuthor['firstname'],
                $rawAuthor['lastname']
            );
        }, $rawAuthors);
        $rawArticles = json_decode($rawData, true)['articles'];
        $articles = array_map(function ($rawArticle) use ($authors){
            $articleAuthorsId = $rawArticle['authorId'];
            $articleAuthors = array_filter($authors, function($author) use ($articleAuthorsId){
                return $author->id == $articleAuthorsId;
            });
            $articleAuthor = current($articleAuthors);
            return new Article(
                $rawArticle['id'],
                $rawArticle['title'],
                $rawArticle['content'],
                $articleAuthor,
                new DateTime($rawArticle['date'])
            );
        }, $rawArticles);
        return $articles;
    }
}