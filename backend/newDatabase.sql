-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema GameSell
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `GameSell` ;

-- -----------------------------------------------------
-- Schema GameSell
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `GameSell` DEFAULT CHARACTER SET utf8 ;
USE `GameSell` ;

-- -----------------------------------------------------
-- Table `GameSell`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`users` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `e-mail` VARCHAR(255) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `e-mail_UNIQUE` (`e-mail` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`clients`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`clients` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`clients` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  `pseudo` VARCHAR(50) NOT NULL,
  `civilite` ENUM('M.', 'Mme.', 'Autre') NOT NULL,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,
  `societe` VARCHAR(100) NULL,
  `portable` VARCHAR(15) NOT NULL,
  `telephone` VARCHAR(15) NULL,
  `date_naissance` DATE NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `complement` VARCHAR(255) NULL,
  `pays` VARCHAR(50) NOT NULL,
  `code_postal` VARCHAR(10) NOT NULL,
  `ville` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`client_id`, `users_id`),
  INDEX `fk_clients_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_clients_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `GameSell`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`categories` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`categories` (
  `categorie_id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `description` TEXT NULL,
  PRIMARY KEY (`categorie_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`produits`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`produits` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`produits` (
  `produit_id` INT NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(100) NOT NULL,
  `plateforme` VARCHAR(50) NOT NULL,
  `date_sortie` DATE NOT NULL,
  `en_stock` TINYINT NOT NULL,
  `etat` ENUM('Neuf', 'Occasion') NOT NULL,
  `description` TEXT NOT NULL,
  `editeur` VARCHAR(50) NOT NULL,
  `genre` VARCHAR(50) NOT NULL,
  `video` VARCHAR(255) NULL,
  `categorie_id` INT NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`produit_id`),
  UNIQUE INDEX `jeux` (`titre` ASC, `plateforme` ASC) VISIBLE,
  INDEX `fk_categorie_idx` (`categorie_id` ASC) VISIBLE,
  CONSTRAINT `fk_categorie`
    FOREIGN KEY (`categorie_id`)
    REFERENCES `GameSell`.`categories` (`categorie_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`panier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`panier` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`panier` (
  `panier_id` INT NOT NULL AUTO_INCREMENT,
  `users_id` INT NOT NULL,
  PRIMARY KEY (`panier_id`),
  INDEX `fk_panier_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_panier_user_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `GameSell`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`commandes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`commandes` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`commandes` (
  `commande_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `date_commande` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statut` VARCHAR(50) NOT NULL,
  `prixtotal` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`commande_id`),
  INDEX `fk_commandes_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_commandes_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `GameSell`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`inventaire`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`inventaire` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`inventaire` (
  `idinventaire` INT NOT NULL AUTO_INCREMENT,
  `produit_id` INT NOT NULL,
  `quantite` INT NOT NULL,
  `date_mise_a_jour` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idinventaire`),
  INDEX `fk_inventaire_produits_idx` (`produit_id` ASC) VISIBLE,
  CONSTRAINT `fk_inventaire_produits`
    FOREIGN KEY (`produit_id`)
    REFERENCES `GameSell`.`produits` (`produit_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`details_commandes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`details_commandes` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`details_commandes` (
  `details_commande_id` INT NOT NULL AUTO_INCREMENT,
  `commande_id` INT NOT NULL,
  `produit_id` INT NOT NULL,
  `quantite` INT NOT NULL,
  `prix_unitaire` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`details_commande_id`),
  INDEX `fk_details_commandes_commande_idx` (`commande_id` ASC) VISIBLE,
  INDEX `fk_details_commandes_produits_idx` (`produit_id` ASC) VISIBLE,
  CONSTRAINT `fk_details_commandes_commande`
    FOREIGN KEY (`commande_id`)
    REFERENCES `GameSell`.`commandes` (`commande_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_details_commandes_produits`
    FOREIGN KEY (`produit_id`)
    REFERENCES `GameSell`.`produits` (`produit_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `GameSell`.`items_panier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `GameSell`.`items_panier` ;

CREATE TABLE IF NOT EXISTS `GameSell`.`items_panier` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `panier_id` INT NOT NULL,
  `produit_id` INT NOT NULL,
  `quantite` INT NOT NULL,
  INDEX `fk_produit_id_idx` (`produit_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_panier_id`
    FOREIGN KEY (`panier_id`)
    REFERENCES `GameSell`.`panier` (`panier_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produit_id`
    FOREIGN KEY (`produit_id`)
    REFERENCES `GameSell`.`produits` (`produit_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;