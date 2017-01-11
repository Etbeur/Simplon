<?php
/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 05/01/17
 * Time: 23:01
 */
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

class Test extends Controller
{
    /**
     * @Route ("/test")
    **/

    public function testAction(){
        $blog = "Votre début d'application symfony fonctionne, début du BLOG!!!";

        return $this->render('test/testBlog.html.twig', [
            'phrase' => $blog,
        ]);
    }
}