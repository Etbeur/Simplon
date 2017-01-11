<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:06
 */
namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

interface IBlogLoader{
    /**
     * @param String $path
     * @return array Article
     */
    function load(String $path):array;
}