<?php

/**
 * Created by PhpStorm.
 * User: etbeur
 * Date: 01/12/16
 * Time: 15:21
 */
class ChargeurJsonFile
{
    public $newFile;

    public function __construct(string $file)
    {
        $this->newFile = $file;
    }

    public function charge($file)
    {
        $data = file_get_contents($file);
        return json_decode($data, true);
    }

}