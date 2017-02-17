<?php

namespace AppBundle\Controller;

use AppBundle\Form\Type\MyFormType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class MyController extends Controller
{
    /**
     * @Route("/page/{param}", name="page", defaults={"param"=1})
     * @Method({"GET", "POST"})
     */
    public function myAction(Request $request)
    {
        $form = $this->createForm(MyFormType::class);
        $form->handleRequest($request);

        if($form->isValid())
        {
            dump($form->getClickedButton()->getName());
            dump($form->getData());
        }

        return $this->render('myTemplates/myView.html.twig', [
            'name' => $request->get('param'),
            'formulaire' => $form->createView()
        ]);
    }
}