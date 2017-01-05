<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:08
 */



class Blog{
    public $title;
    public $articles;
    public function __construct(String $title, array $articles)
    {
        $this->title = $title;
        $this->articles = $articles;
    }
    /**
     * Renvoie le header  du blog
     * <header>titre
     * @return String
     */
    function displayHeader(): String
    {
        return "<h1>" .$this->title. "</h1>";
    }
    /**
     * affiche la liste des titres d'articles sous formes de liens vers les articles
     */
    function displayArticleList(): String
    {
        $articleLinks = array_map(function($article){
            return "<a href=\"". $_SERVER['PHP_SELF']. "?articleId="
                .$article->id."\">$article->title</a>";
        },$this->articles);
        return join("<hr/>", $articleLinks);
    }
    /**
     * renvoie le contenu HTML d'un article
     * @param int $articleId
     * @return String
     */
    function displayArticle(int $articleId): String
    {
        $selectedArticle = current(array_filter($this->articles,function($article) use ($articleId){
            return $article->id == $articleId ;
        }));
        $renderer = new ArticleRenderer($selectedArticle);
        return $renderer->render();
    }
    /**
     * renvoie un footer avec la date du jour
     * <footer></footer>
     */
    function displayFooter()
    {
        $date = New DateTime();
        return "<footer><p>Nous sommes le " .$date->format('d-m-Y').".</p>";
    }
}