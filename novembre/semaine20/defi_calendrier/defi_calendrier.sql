-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 17 Novembre 2016 à 17:26
-- Version du serveur: 5.5.53-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `defi_calendrier`
--

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE IF NOT EXISTS `evenement` (
  `id_evenement` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `mail_createur` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_evenement`),
  UNIQUE KEY `id_evenement` (`id_evenement`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=16 ;

--
-- Contenu de la table `evenement`
--

INSERT INTO `evenement` (`id_evenement`, `titre`, `date_debut`, `date_fin`, `mail_createur`) VALUES
(8, 'Test durÃ©e limitÃ©', '2016-11-17', '2016-11-17', 'toto@live.fr'),
(9, 'reunion', '2016-11-19', '2016-11-20', 'lol@live.fr'),
(10, 'test45', '2016-11-26', '2016-11-28', 'titi@gmail.com'),
(11, 'reunion annuelle', '2016-11-21', '2016-11-22', 'jean@live.fr'),
(12, 'test date', '2016-11-24', '2016-11-24', 'roger@gmail.com'),
(13, 'test1247', '2016-11-18', '2016-11-20', 'toti@gmail.com'),
(14, 'test3000', '2016-11-25', '2016-11-30', 'james@gmail.com'),
(15, 'test3200', '2016-11-15', '2016-11-15', 'toti@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
