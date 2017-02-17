<?php

namespace PageBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class MyCommand extends ContainerAwareCommand
{
    private $input;
    private $output;

    protected function configure()
    {
        $this
            ->setName('my:hello')
            ->setDescription('Say hello')
            ->addArgument(
                'name',
                InputArgument::OPTIONAL,
                'Give your name',
                'Anonymous'
                )
            ->addOption(
                'uppercase',
                'u',
                InputOption::VALUE_NONE,
                'Set text to uppercase'
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->input = $input;
        $this->output = $output;

        $uppercase = $this->input->getOption('uppercase');
        $name = $this->input->getArgument('name');
        $text = sprintf('Hello %s', $name);
        $finalText = $uppercase? strtoupper($text) : $text;

        $this->output->writeln($finalText);
    }
}