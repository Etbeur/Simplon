<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:05
 */
/**
 * Class BlogDBLoader charge les articles depuis une base de données
 */
class BlogDBLoader implements IBlogLoader{
    /**
     * @param $dbname
     */
    function load(String $path):array
    {
        //Connexion à la base de donnée
        try {
            $connexion = new PDO(
                'mysql:host=localhost; dbname=' .$path. '; charset-utf-8',
                'root', 'root');
        } catch (Exception $e) {
            die('Erreur: ' . $e->getMessage());
        }

        //On prépare les données de auteurs
        $requeteAuthors = "SELECT id, prenom, nom from auteurs";
        $resultatAuthors = $connexion->prepare($requeteAuthors);
        $resultatAuthors->execute();
        $dataAuthors = $resultatAuthors->fetchAll(PDO::FETCH_ASSOC);
        //On va créer un nouvel auteur pour chaque ligne du tableau d'auteurs de la bdd
        $authors = array_map(function($author){
            return new Author(
                $author['id'],
                $author['prenom'],
                $author['nom']
            );
        }, $dataAuthors);

        //On prépare les données de articles
        $requeteArticles = "SELECT * from articles";
        $resultatArticles = $connexion->prepare($requeteArticles);
        $resultatArticles->execute();
        $dataArticles = $resultatArticles->fetchAll(PDO::FETCH_ASSOC);
        //On va créer de nouveaux articles à partir du tableau venant de la bdd
        $articles = array_map(function($article) use ($authors){
            $articleAuthorsId = $article['id_authors'];
            //On filtre les auteurs afin de faire correspondre (id de l'auteur) avec (auteur_id de article)
            $articleAuthors = array_filter($authors, function($author) use ($articleAuthorsId){
                return $author->id == $articleAuthorsId;
            });
            $articleAuthor = current($articleAuthors);
            //Création d'un nouvel article avec les données qui ont été récupéré
            return new Article(
                $article['id_article'],
                $article['title'],
                $article['content'],
                $articleAuthor,
                new DateTime($article['date'])
            );
        },$dataArticles);
        return $articles;
    }
}