CREATE DATABASE  IF NOT EXISTS `gamesell` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gamesell`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gamesell
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `categorie_id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Action','Jeux vidéo d\'action'),(2,'Aventure','Jeux vidéo d\'aventure'),(3,'Sport','Jeux vidéo de sport');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `client_id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `civilite` enum('M.','Mme.','Autre') NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `societe` varchar(100) DEFAULT NULL,
  `portable` varchar(15) NOT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `date_naissance` date NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `complement` varchar(255) DEFAULT NULL,
  `pays` varchar(50) NOT NULL,
  `code_postal` varchar(10) NOT NULL,
  `ville` varchar(50) NOT NULL,
  PRIMARY KEY (`client_id`,`users_id`),
  KEY `fk_clients_users_idx` (`users_id`),
  CONSTRAINT `fk_clients_users` FOREIGN KEY (`users_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,1,'Alice123','Mme.','Alice','Smith',NULL,'1234567890',NULL,'1990-01-01','123 rue ABC',NULL,'France','75000','Paris'),(2,2,'Bob123','M.','Bob','Johnson',NULL,'0987654321',NULL,'1985-06-15','456 avenue XYZ',NULL,'France','75001','Paris'),(3,3,'Charlie123','Autre','Charlie','Brown',NULL,'1112223334',NULL,'1995-12-25','789 boulevard QWERTY',NULL,'France','75002','Paris');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commandes`
--

DROP TABLE IF EXISTS `commandes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commandes` (
  `commande_id` int NOT NULL,
  `user_id` int NOT NULL,
  `date_commande` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statut` varchar(50) NOT NULL,
  `prixtotal` decimal(10,2) NOT NULL,
  PRIMARY KEY (`commande_id`),
  KEY `fk_commandes_users_idx` (`user_id`),
  CONSTRAINT `fk_commandes_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commandes`
--

LOCK TABLES `commandes` WRITE;
/*!40000 ALTER TABLE `commandes` DISABLE KEYS */;
INSERT INTO `commandes` VALUES (1,1,'2023-10-02 16:22:38','Livré',59.99),(2,2,'2023-10-02 16:22:38','En cours',39.99);
/*!40000 ALTER TABLE `commandes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `details_commandes`
--

DROP TABLE IF EXISTS `details_commandes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `details_commandes` (
  `details_commande_id` int NOT NULL AUTO_INCREMENT,
  `commande_id` int NOT NULL,
  `produit_id` int NOT NULL,
  `quantite` int NOT NULL,
  `prix_unitaire` decimal(10,2) NOT NULL,
  PRIMARY KEY (`details_commande_id`),
  KEY `fk_details_commandes_commande_idx` (`commande_id`),
  KEY `fk_details_commandes_produits_idx` (`produit_id`),
  CONSTRAINT `fk_details_commandes_commande` FOREIGN KEY (`commande_id`) REFERENCES `commandes` (`commande_id`),
  CONSTRAINT `fk_details_commandes_produits` FOREIGN KEY (`produit_id`) REFERENCES `produits` (`produit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `details_commandes`
--

LOCK TABLES `details_commandes` WRITE;
/*!40000 ALTER TABLE `details_commandes` DISABLE KEYS */;
INSERT INTO `details_commandes` VALUES (1,1,1,1,59.99),(2,2,2,1,39.99);
/*!40000 ALTER TABLE `details_commandes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventaire`
--

DROP TABLE IF EXISTS `inventaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventaire` (
  `idinventaire` int NOT NULL AUTO_INCREMENT,
  `produit_id` int NOT NULL,
  `quantite` int NOT NULL,
  `date_mise_a_jour` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idinventaire`),
  KEY `fk_inventaire_produits_idx` (`produit_id`),
  CONSTRAINT `fk_inventaire_produits` FOREIGN KEY (`produit_id`) REFERENCES `produits` (`produit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventaire`
--

LOCK TABLES `inventaire` WRITE;
/*!40000 ALTER TABLE `inventaire` DISABLE KEYS */;
INSERT INTO `inventaire` VALUES (1,1,10,'2023-10-02 16:22:38'),(2,2,20,'2023-10-02 16:22:38'),(3,3,0,'2023-10-02 16:22:38');
/*!40000 ALTER TABLE `inventaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items_panier`
--

DROP TABLE IF EXISTS `items_panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items_panier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `panier_id` int NOT NULL,
  `produit_id` int NOT NULL,
  `quantite` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_produit_id_idx` (`produit_id`),
  KEY `fk_panier_id` (`panier_id`),
  CONSTRAINT `fk_panier_id` FOREIGN KEY (`panier_id`) REFERENCES `panier` (`panier_id`),
  CONSTRAINT `fk_produit_id` FOREIGN KEY (`produit_id`) REFERENCES `produits` (`produit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_panier`
--

LOCK TABLES `items_panier` WRITE;
/*!40000 ALTER TABLE `items_panier` DISABLE KEYS */;
INSERT INTO `items_panier` VALUES (1,1,1,2),(2,2,2,1),(3,3,1,1);
/*!40000 ALTER TABLE `items_panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panier`
--

DROP TABLE IF EXISTS `panier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panier` (
  `panier_id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  PRIMARY KEY (`panier_id`),
  KEY `fk_panier_users1_idx` (`users_id`),
  CONSTRAINT `fk_panier_user_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panier`
--

LOCK TABLES `panier` WRITE;
/*!40000 ALTER TABLE `panier` DISABLE KEYS */;
INSERT INTO `panier` VALUES (1,1),(2,2),(3,3);
/*!40000 ALTER TABLE `panier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produits`
--

DROP TABLE IF EXISTS `produits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produits` (
  `produit_id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(100) NOT NULL,
  `plateforme` varchar(50) NOT NULL,
  `date_sortie` date NOT NULL,
  `en_stock` tinyint NOT NULL,
  `etat` enum('Neuf','Occasion') NOT NULL,
  `description` text NOT NULL,
  `editeur` varchar(50) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `categorie_id` int NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`produit_id`),
  UNIQUE KEY `jeux` (`titre`,`plateforme`),
  KEY `fk_categorie_idx` (`categorie_id`),
  CONSTRAINT `fk_categorie` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`categorie_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produits`
--

LOCK TABLES `produits` WRITE;
/*!40000 ALTER TABLE `produits` DISABLE KEYS */;
INSERT INTO `produits` VALUES (1,'Game1','PC','2022-01-01',1,'Neuf','Description du jeu 1','Editeur1','Action',NULL,1),(2,'Game2','Xbox','2022-02-01',1,'Occasion','Description du jeu 2','Editeur2','Aventure',NULL,2),(3,'Game3','PlayStation','2022-03-01',0,'Neuf','Description du jeu 3','Editeur3','Sport',NULL,3);
/*!40000 ALTER TABLE `produits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `e-mail` varchar(255) NOT NULL,
  `password` varchar(128) NOT NULL,
  `nom` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `e-mail_UNIQUE` (`e-mail`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'alice@email.com','alicePassword','Alice'),(2,'bob@email.com','bobPassword', 'Bob'),(3,'charlie@email.com','charliePassword','Charlie');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-02 16:39:03
