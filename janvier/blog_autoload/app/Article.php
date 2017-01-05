<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:07
 */
/**
 * Class Article
 */
class Article{
    public $id;
    public $title;
    public $content;
    public $author;
    public $publicationDate;
    public function __construct(Int $id, String $title, String $content, Author $author, DateTime $date)
    {
        $this->id = $id;
        $this->title = $title;
        $this->content = $content;
        $this->publicationDate = $date;
        $this->author = $author;
    }
}