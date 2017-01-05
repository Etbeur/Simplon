<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 03/01/17
 * Time: 15:06
 */
interface IBlogLoader{
    /**
     * @param String $path
     * @return array Article
     */
    function load(String $path):array;
}