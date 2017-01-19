<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class MyController extends Controller
{
    public function myAction()
    {
        return $this->render('myTemplates/myViews.html.twig');
    }
}