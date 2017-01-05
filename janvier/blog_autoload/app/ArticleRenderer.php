<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:08
 */
class ArticleRenderer{
    public function __construct(Article $article)
    {
        $this->article = $article;
    }
    /**
     * renvoie l'article mis en forme
     * <h2>titre</h2>
     * <p>article</p>
     * <p>par nom-court, le date </p>
     * @return String
     */
    function render(): String
    {
        return "<h2>". $this->article->title ."</h2>"
            ."<p>". $this->article->content ."</p>"
            ."<p>". $this->article->author->getShortName() ."</p>"
            ." Ecrit le " .$this->article->publicationDate->format('d-m-Y')
            ."<p><a href=$_SERVER[PHP_SELF]>Accueil</a></p>";
    }
}
