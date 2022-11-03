# ************************************************************
# Sequel Ace SQL dump
# Version 20039
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: localhost (MySQL 8.0.27)
# Database: alabmodelingv1
# Generation Time: 2022-11-03 20:26:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table chantiers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `chantiers`;

CREATE TABLE `chantiers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `key1` varchar(255) DEFAULT NULL,
  `key2` varchar(255) DEFAULT NULL,
  `key3` varchar(255) DEFAULT NULL,
  `key4` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `specifications` varchar(255) DEFAULT NULL,
  `taches` varchar(255) DEFAULT NULL,
  `img1` varchar(255) DEFAULT NULL,
  `img2` varchar(255) DEFAULT NULL,
  `img3` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `entrepriseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `entrepriseId` (`entrepriseId`),
  CONSTRAINT `chantiers_ibfk_1` FOREIGN KEY (`entrepriseId`) REFERENCES `entreprises` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `chantiers` WRITE;
/*!40000 ALTER TABLE `chantiers` DISABLE KEYS */;

INSERT INTO `chantiers` (`id`, `name`, `slug`, `key1`, `key2`, `key3`, `key4`, `intro`, `specifications`, `taches`, `img1`, `img2`, `img3`, `createdAt`, `updatedAt`, `entrepriseId`)
VALUES
	(1,'Twilight','twilight','Architecte Frédéric Fisher','météorite','Meteor','meteorite','NEUCHATEL-SUISSE (2019) Oeuvre d\'art \'Twilight\' 90 000€)','Verre feuilleté miroir rétro-éclairé collé sur une structure auto-portante en inox','- Modélisation de l’objet en 3D (Solidworks)\n- Réalisation des plans d’approbations, d’exécutions\n- Suivi des pièces en production','https://i.imgur.com/oEEsniW.jpg','https://i.imgur.com/t9QmquS.jpg','https://i.imgur.com/VNYkDDV.jpg','2022-10-31 14:29:54','2022-11-02 20:19:36',2),
	(2,'Iberdrola','iberdrola','Architect Pelli','élancée','schlank','slim','BILBAO  ESPAGNE (2006-2011)  Tour “ Iberdola” (11 Millions €)','Tour élancée avec une Façade double peau','Responsable technique de la peau extérieure\n- modélisation en 3D (SolidWorks) \n- Réalisation de plan d’étude, d’exécution et de pose \n- Suivi de la fabrication et du montage en production','https://i.imgur.com/MBEjxNH.png','https://i.imgur.com/UzyY5xe.png','https://i.imgur.com/97pl6By.png','2022-11-02 13:12:18','2022-11-02 22:03:34',2),
	(3,'Samaritaine','samaritaine','DYA architectes','monumentale','monumentalen','monumental','PARIS- FRANCE  (2020) Magasin \"la SAMARITAINE \" ','Grilles monumentales décoratif  à ouverture en Arcodéons (4 vantaux) . Structure acier avec des décorations en tôle en découpe laser','- Conception des Grilles\n- Choix et validation des pièces de manoeuvre et de fermeture\n- Plan de fabrication et  plan de pose','https://i.imgur.com/negQMVi.png','https://i.imgur.com/9rkmBzR.png','https://i.imgur.com/M2DCc0e.png','2022-11-02 13:44:50','2022-11-02 22:39:21',9),
	(4,'MediaPark','mediapark','Architecte Jean Nouvel','nuageux','bewölkt','cloudy','KOLN - ALLEMAGNE (2001)  Tour “Médiapark” (5 Millions€)','un vitrage isolant sérigraphié (nuages et vue de Köln)','- Réalisation de plan de calepinage et de fabrication de tôle\n- Réalisation de plan de coupe de principe et d’élévation du bâtiment','https://i.imgur.com/FwDeIRX.png','https://i.imgur.com/c32ghWt.png','','2022-11-02 14:41:06','2022-11-02 22:19:44',10),
	(5,'Swiss Re','swiss-re-1','Architecte Foster & Partners','Torsion','Verdrehung','Twist','LONDRE - ANGLETERRE (2003) Tour \"Swiss Re\"(17 Millions€)','éléments de forme losange installé sur une structure métallique','- Responsable de la maquette de la peau extérieur (de taille réelle) pour les essais au vent et a l\'étanchéité.\n- Développement et exécution de la façade de l\'entrée (système poteau / traverse en acier de grande hauteur','https://i.imgur.com/W0SIuiI.png','https://i.imgur.com/TvBQaiq.png','','2022-11-02 20:47:38','2022-11-02 22:19:55',8),
	(6,'Peek and Cloppenburg','peek-and-cloppenburg','Architecte Renso Piano','baleine','Walfisch','whales','KÖLN - ALLEMAGNE (2006) Magasin \"Peek and cloppenburg\" (9 Millions€)','-éléments rectangulaires positionnés en peau de requin. Façade verticale se transformant en verrière sans discontinuité (sans changer de système).','- Modélisation 3D des éléments sur Solid Edge\n- réalisation du catalogue technique pour le projet (plan du system, de filière, de sous-\nconstruction, d’étanchéité, de fabrication etc.)','https://i.imgur.com/QNNQmiR.png','https://i.imgur.com/0W5pear.png','https://i.imgur.com/vthyytW.png','2022-11-02 21:50:23','2022-11-02 22:20:05',8),
	(7,'Majunga','majunga','Architecte Jean-Paul Viguier','facette','facettiert','facet','PARIS- FRANCE (2012) Tour \"Majunga\" (30 Millions€)','façade à inclinaison variable (36 500m2 de façade)','- chef de service, responsable des lancements en fabrication\n- Mise en place de SolidWorks et de l’EPDM (35 licences)','https://i.imgur.com/qVw3PgL.png','https://i.imgur.com/Uf0koZ9.png','https://i.imgur.com/KAqF9p0.png','2022-11-02 22:06:30','2022-11-02 22:20:19',1),
	(8,'Pavillon 7','pavillon-7','Architecte Valode & Pistre','vague','Welle','wave','PARIS- FRANCE (2017) Tour \"Pavillon 7\" (4 Millions€)','Mur rideau plissés à ossature acier (5 000m2 de façade)','- Technicien d’étude 3D, modélisation du prototype technique (AEV)\n- Création et gestion de la bibliothèque 3D','https://i.imgur.com/AKg0FtU.png','https://i.imgur.com/rBhOOoF.png','https://i.imgur.com/fnvzxDG.png','2022-11-02 22:14:20','2022-11-02 22:20:32',1),
	(9,'The bridge','the-bridge','Architecte Jean Paul Viguier (31','Eiffel','Eiffel','Eiffel','PARIS- FRANCE (2018) Bureaux et Restaurant \"The bridge\" (31 Millions€)','rénovation de la structure Métallique Eiffel (hors lot façade) et création des Mur rideau grille du Hall (400 m2 pour le hall)','Technicien d’étude 2D, étude des coupes et détails standard « plan directeur »','https://i.imgur.com/JBN0sWL.png','https://i.imgur.com/lMgBdiO.png','https://i.imgur.com/hR1m6fQ.png','2022-11-02 22:23:33','2022-11-02 22:27:10',1),
	(10,'La Norma','la-norma','Architecte Lobjoy Bouvier Boisseau','triangulaire','dreieckig','triangular','PARIS- FRANCE (2012) Bureaux  \"La Norma\" (5.5 Millions€)','Mur rideau à facette, Façade métallique au RDC et bloc double hauteur à l’attique. (9 000m2 de façade)','Technicien d’étude 2D, étude des coupes et détails standard « plan directeur »','https://i.imgur.com/F5NVHMP.png','https://i.imgur.com/wCOZosG.png','https://i.imgur.com/aqGBCnA.png','2022-11-02 22:29:52','2022-11-02 22:33:37',1),
	(11,'Dior','dior','Architecte Chatillons','luxe','Luxus','luxury','PARIS- FRANCE (2021)   Vitrine de Magasin \"Dior\" ','Structure acier habillé de laiton (fixe et ouvrant caché)','Projeteur d’étude 2D, étude des coupes , détails standard et plans de fabrication\n','https://i.imgur.com/sxyZa1n.png','https://i.imgur.com/JjESzXB.png','https://i.imgur.com/xNuHPz1.png','2022-11-02 22:43:40','2022-11-02 22:54:32',9);

/*!40000 ALTER TABLE `chantiers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table entreprises
# ------------------------------------------------------------

DROP TABLE IF EXISTS `entreprises`;

CREATE TABLE `entreprises` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `entreprises` WRITE;
/*!40000 ALTER TABLE `entreprises` DISABLE KEYS */;

INSERT INTO `entreprises` (`id`, `name`, `slug`, `color`, `logo`, `createdAt`, `updatedAt`)
VALUES
	(1,'Goyer','goyer','#1500ff','','2022-10-18 15:05:17','2022-10-26 09:32:06'),
	(2,'Félix Constructions','felix-constructions','#fe0000','https://i.imgur.com/L7PAWkg.jpg','2022-10-18 15:15:20','2022-11-02 09:18:16'),
	(8,'Schmidlin','schmidlin','#008000',NULL,'2022-10-30 18:43:30','2022-10-30 18:43:30'),
	(9,'VLD','vld','#ffd700','https://i.imgur.com/qXcEPVt.gif','2022-11-02 13:41:02','2022-11-02 13:41:56'),
	(10,'Rinaldi Structural','rinaldi-structural','#189ffb','https://i.imgur.com/rtEOkUo.jpg','2022-11-02 13:57:41','2022-11-02 13:57:41');

/*!40000 ALTER TABLE `entreprises` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table formations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `formations`;

CREATE TABLE `formations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `year` smallint DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `typeId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `formations_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `types` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `formations` WRITE;
/*!40000 ALTER TABLE `formations` DISABLE KEYS */;

INSERT INTO `formations` (`id`, `name`, `slug`, `content`, `year`, `createdAt`, `updatedAt`, `typeId`)
VALUES
	(3,'REVIT DYNAMO','revit-dynamo','délivré par ARKANCE',2020,'2022-10-21 13:56:14','2022-10-21 13:56:14',1),
	(13,'REVIT \"REVIT2019 Base et Etude de prix\"','revit-revit2019-base-et-etude-de-prix','délivré par ARKANCE',2019,'2022-11-02 15:18:14','2022-11-02 15:18:14',1),
	(14,'MOOC - BIM','mooc-bim','\"Conduire sa première opération en BIM\" 2019  - 88% de bonnes réponses (4 semaines de cours vidéo) par  INSA de Toulouse',2018,'2022-11-02 15:19:41','2022-11-02 20:05:29',1),
	(15,'MOOC - BIM','mooc-bim-1','\" devenez acteur de la transition numérique \" - 97% de bonnes réponses (4 semaines de cours vidéo) par INSA de Toulouse ',2019,'2022-11-02 15:20:49','2022-11-02 20:04:34',1),
	(16,'MOOC - BIM','mooc-bim-2','\" Prescrire et estimer à l\'heure du BIM \" - 98% de bonnes réponses (6 semaines de cours vidéo) par UNTEC de Paris ',2019,'2022-11-02 15:21:53','2022-11-02 20:04:44',1),
	(17,'LICENCE Professionnelle DNTS','licence-professionnelle-dnts','(Diplôme National de Technique Spécialisé) « D’études d’Ingénierie des Façades » à l’IUT de Melun Sénart ',2000,'2022-11-02 15:33:57','2022-11-02 15:33:57',2),
	(18,'DUT Diplôme Universitaire Technique','dut-diplome-universitaire-technique','« Génie Mécanique et Productique »  à l’IUT de Mulhouse ',1996,'2022-11-02 15:36:25','2022-11-02 15:36:25',2),
	(19,' BAC Baccalauréat','bac-baccalaureat','« Génie Mécanique et Productique »  au Lycée Louis Armand de Mulhouse	',1993,'2022-11-02 15:38:29','2022-11-02 15:38:29',11),
	(20,'Anglais','anglais','Compétence professionnelle',0,'2022-11-02 15:39:16','2022-11-02 15:39:16',12),
	(21,'Allemand','allemand','Notions élémentaires',0,'2022-11-02 15:39:33','2022-11-02 15:39:33',12);

/*!40000 ALTER TABLE `formations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table informations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `informations`;

CREATE TABLE `informations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `birth` date DEFAULT NULL,
  `permis` varchar(255) DEFAULT NULL,
  `infos` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `informations` WRITE;
/*!40000 ALTER TABLE `informations` DISABLE KEYS */;

INSERT INTO `informations` (`id`, `name`, `titre`, `birth`, `permis`, `infos`, `phone`, `email`, `company`, `logo`, `linkedin`, `createdAt`, `updatedAt`)
VALUES
	(1,'Abenzoar Alex','Responsable BE / Expert 3D ','1974-03-30','Permis B - Véhiculé','Expertise sur la conduite au changement pour déployer un logiciel 3D et Réferent B.I.M\nFaçadier, Menuisier Acier / aluminium, Ferronnier','06-19-94-16-19','alabmodeling@gmail.com','VLD Paris','logo-alab.jpg','https://www.linkedin.com/in/alex-abenzoar-b22724143/','2022-10-20 13:12:43','2022-11-03 10:11:04');

/*!40000 ALTER TABLE `informations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table logiciels
# ------------------------------------------------------------

DROP TABLE IF EXISTS `logiciels`;

CREATE TABLE `logiciels` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `logiciels` WRITE;
/*!40000 ALTER TABLE `logiciels` DISABLE KEYS */;

INSERT INTO `logiciels` (`id`, `name`, `content`, `slug`, `createdAt`, `updatedAt`)
VALUES
	(1,'BIM (Building Information Modeling)','Notion sur REVIT et Dynamo','bim-building-information-modeling','2022-10-18 20:23:48','2022-10-22 10:02:25'),
	(4,'CAO 3D','Maitrise de CATIA, SolidWorks, Solidedge','cao-3d','2022-10-30 17:13:06','2022-10-30 17:13:06'),
	(5,'CAO 2D','Maitrise de Autocad','cao-2d','2022-10-30 17:18:47','2022-10-30 17:18:47'),
	(6,'PDM (Product data manager)','Maitrise de EPDM de Solidworks','pdm-product-data-manager','2022-10-30 17:19:18','2022-10-30 17:19:18'),
	(7,'Bureautique','Maitrise de Excel , Word, Powerpoint','bureautique','2022-10-30 17:19:43','2022-10-30 17:19:43');

/*!40000 ALTER TABLE `logiciels` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `types`;

CREATE TABLE `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;

INSERT INTO `types` (`id`, `name`, `slug`, `createdAt`, `updatedAt`)
VALUES
	(1,'Certificat','certificat','2022-10-18 20:22:28','2022-10-21 13:29:15'),
	(2,'Diplôme Post-Bac','diplome-post-bac','2022-10-21 13:31:32','2022-10-21 13:31:32'),
	(11,'BAC','bac','2022-11-02 15:37:51','2022-11-02 15:37:51'),
	(12,'Langues','langues','2022-11-02 15:38:51','2022-11-02 15:38:51');

/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`)
VALUES
	(2,'admin','9d4e1e23bd5b727046a9e3b4b7db57bd8d6ee684','2022-10-20 09:11:42','2022-10-20 09:11:42');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
