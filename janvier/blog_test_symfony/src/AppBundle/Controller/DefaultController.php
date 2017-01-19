<?php

namespace AppBundle\Controller;


use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Model\Article;
use AppBundle\Entity\Author;
use AppBundle\Controller\IBlogLoader;
use AppBundle\Controller\BlogJsonLoader;
use AppBundle\Controller\BlogCSVLoader;


define('BLOG_PATH', 'data/blog.json');
//define('BLOG_PATH', 'data/blog2.csv');

class DefaultController extends Controller
{
    function __construct()
    {

    }


    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $loader = new BlogJsonLoader();
        $articles = $loader->load(BLOG_PATH);

        return $this->render('blog/accueilBlog.html.twig', [
            'articles' => $articles
        ]);
    }

//    public function indexAction(Request $request){
//        $csvLoader = new BlogCSVLoader();
//        $articles = $csvLoader ->load(BLOG_PATH);
//
//        return $this->render('blog/accueilBlog.html.twig', [
//            'articles' => $articles
//        ]);
//    }

    /**
     * @Route("/details/{articleId}", name="articleDetails")
     */
    public function detailsAction($articleId){
        $loader = new BlogJsonLoader();
        $articles = $loader->load(BLOG_PATH);

        $selectedArticle = current( array_filter(
            $articles,
            function($article) use($articleId) {
                return $articleId == $article->id;
            }));

        return $this->render('blog/pageBlog.html.twig',
            ["article"=>$selectedArticle]
        );
    }

    /**
     * @Route("/random", name="randomPage")
     */

    public function  randomAction(Request $request){



        $author = new Author();
        $author->setFirstname('damien');
        $author->setLastname('trams');
        $author->setEmail('d.trams@gmail.com');

        $entry = $this->getDoctrine()->getManager();
        $entry->persist($author);
        $entry->flush();

        return new Response('Nouvel auteur avec l\'id' .$author->getId());


    }
}
