<?php

class Evenement{

    public $id;
    public $title;
    public $dateStart;
    public $dateStop;
    public $contact;

    public function __construct($id= null, $title= null, $dateStart= null, $dateStop= null, $contact= null){
        if($id)
            $this->id = $id;
        if($title)
            $this->title = $title;
        if($dateStart)
            $this->dateStart = $dateStart;
        if($dateStop)
            $this->dateStop = $dateStop;
        if($contact)
            $this->contact = $contact;
    }

    function __toString(){

        return "Event {id: $this->id, titre: $this->title, start $this->dateStart, stop $this->dateStop, contact $this->contact }";
    }
}

?>
