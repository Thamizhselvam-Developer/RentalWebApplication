-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: Rental_Db
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `add_on_item`
--

DROP TABLE IF EXISTS `add_on_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_on_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `items_name` varchar(255) DEFAULT NULL,
  `items_prize` double(6,2) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_on_item`
--

LOCK TABLES `add_on_item` WRITE;
/*!40000 ALTER TABLE `add_on_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `add_on_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adminrole_tbl`
--

DROP TABLE IF EXISTS `adminrole_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminrole_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminrole_tbl`
--

LOCK TABLES `adminrole_tbl` WRITE;
/*!40000 ALTER TABLE `adminrole_tbl` DISABLE KEYS */;
INSERT INTO `adminrole_tbl` VALUES (29,'ADMIN',_binary '\0','2025-05-15 10:54:07',NULL,'2025-05-15 10:54:07',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adminrole_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking_details`
--

DROP TABLE IF EXISTS `booking_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_details` (
  `id` char(10) NOT NULL,
  `pickup` datetime NOT NULL,
  `dropping` datetime NOT NULL,
  `pickup_location` varchar(255) NOT NULL,
  `total_price` double(6,2) DEFAULT NULL,
  `advance_payment` double(6,2) DEFAULT NULL,
  `user_id` char(10) NOT NULL,
  `rental_shop_id` char(10) NOT NULL,
  `vehicle_id` char(10) NOT NULL,
  `add_ons` int DEFAULT NULL,
  `rental_duration_id` int DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  `drop_location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `add_ons` (`add_ons`),
  KEY `rental_duration_id` (`rental_duration_id`),
  KEY `vehicle_id` (`vehicle_id`),
  KEY `rental_shop_id` (`rental_shop_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `booking_details_ibfk_1` FOREIGN KEY (`rental_duration_id`) REFERENCES `rental_duration_tbl` (`id`),
  CONSTRAINT `booking_details_ibfk_2` FOREIGN KEY (`add_ons`) REFERENCES `add_on_item` (`id`),
  CONSTRAINT `booking_details_ibfk_3` FOREIGN KEY (`rental_duration_id`) REFERENCES `rental_duration_tbl` (`id`),
  CONSTRAINT `booking_details_ibfk_4` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_tbl` (`id`),
  CONSTRAINT `booking_details_ibfk_5` FOREIGN KEY (`rental_shop_id`) REFERENCES `rental_shop_tbl` (`id`),
  CONSTRAINT `booking_details_ibfk_6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_details`
--

LOCK TABLES `booking_details` WRITE;
/*!40000 ALTER TABLE `booking_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brand_tbl`
--

DROP TABLE IF EXISTS `brand_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_tbl`
--

LOCK TABLES `brand_tbl` WRITE;
/*!40000 ALTER TABLE `brand_tbl` DISABLE KEYS */;
INSERT INTO `brand_tbl` VALUES (1,'Toyota','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:19:55',NULL,NULL,NULL),(2,'Honda','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(3,'Ford','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(4,'Chevrolet','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(5,'Nissan','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(6,'BMW','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(7,'Mercedes-Benz','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(8,'Volkswagen','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(9,'Hyundai','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(10,'Kia','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(11,'Audi','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(12,'Lexus','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(13,'Subaru','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(14,'Mazda','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(15,'Jeep','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(16,'Tesla','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(17,'Volvo','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(18,'Porsche','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(19,'Jaguar','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(20,'Land Rover','2025-05-12 09:22:55','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:20:19',NULL,NULL,NULL),(22,'s','2025-05-13 09:19:04','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:19:04',NULL,NULL,NULL);
/*!40000 ALTER TABLE `brand_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_tbl`
--

DROP TABLE IF EXISTS `categories_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` text,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tbl`
--

LOCK TABLES `categories_tbl` WRITE;
/*!40000 ALTER TABLE `categories_tbl` DISABLE KEYS */;
INSERT INTO `categories_tbl` VALUES (1,'Cars','A standard passenger car available for rent, ideal for daily transportation..',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-15 10:59:14','G3rxp848ph',NULL,NULL),(2,'Bike','A two-wheeled vehicle for rent, perfect for individual and eco-friendly transport.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(3,'Van','A spacious vehicle for rent, suitable for families or groups, also for transporting goods.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(4,'SUV','Sport Utility Vehicle for rent, offering both comfort and off-road capability.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(5,'Motorcycle','A two-wheeled vehicle for rent, providing fast and efficient travel for individuals.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(6,'Electric Car','A fully electric vehicle for rent, offering a sustainable and eco-friendly ride.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(7,'Luxury Car','High-end cars available for rent, providing a premium and comfortable driving experience.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(8,'Minivan','A rental vehicle designed for families or groups, with plenty of space and comfort.',_binary '\0','2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(9,'d','d',_binary '\0','2025-05-12 17:42:53','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(10,'w','w',_binary '\0','2025-05-12 17:45:24','Yw9mFhz7DZ','2025-05-12 17:45:24',NULL,NULL,NULL),(12,'wsade','sawde',_binary '\0','2025-05-13 09:21:20','Yw9mFhz7DZ','2025-05-13 09:21:20',NULL,NULL,NULL),(13,'sdsa','asdasd',_binary '\0','2025-05-15 10:58:20','G3rxp848ph','2025-05-15 10:58:20',NULL,NULL,NULL),(14,'ASD','ASD',_binary '\0','2025-05-23 06:16:18',NULL,'2025-05-23 06:16:18',NULL,NULL,NULL);
/*!40000 ALTER TABLE `categories_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fuel_type_tbl`
--

DROP TABLE IF EXISTS `fuel_type_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fuel_type_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuel_type_tbl`
--

LOCK TABLES `fuel_type_tbl` WRITE;
/*!40000 ALTER TABLE `fuel_type_tbl` DISABLE KEYS */;
INSERT INTO `fuel_type_tbl` VALUES (44,'Petrol','2025-05-13 09:22:09','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:22:09',NULL,NULL,NULL),(45,'Desiel','2025-05-13 09:22:18','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:22:18',NULL,NULL,NULL),(46,'Ev','2025-05-13 09:22:23','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:22:23',NULL,NULL,NULL);
/*!40000 ALTER TABLE `fuel_type_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_License_img_tbl`
--

DROP TABLE IF EXISTS `rental_License_img_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_License_img_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_License_img_tbl`
--

LOCK TABLES `rental_License_img_tbl` WRITE;
/*!40000 ALTER TABLE `rental_License_img_tbl` DISABLE KEYS */;
INSERT INTO `rental_License_img_tbl` VALUES (10,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-11 18:24:52',NULL,'2025-05-11 18:24:52',NULL,NULL,NULL),(11,'Abstract - Nature.jpg','C:\\fakepath',_binary '\0','2025-05-14 05:20:39',NULL,'2025-05-14 05:20:39',NULL,NULL,NULL),(12,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:01:42',NULL,'2025-05-14 06:01:42',NULL,NULL,NULL),(13,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:14',NULL,'2025-05-14 06:04:14',NULL,NULL,NULL),(14,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:17',NULL,'2025-05-14 06:04:17',NULL,NULL,NULL),(15,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:55',NULL,'2025-05-14 06:04:55',NULL,NULL,NULL),(16,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:05:40',NULL,'2025-05-14 06:05:40',NULL,NULL,NULL),(17,'Anime-Girl3.png','C:\\fakepath',_binary '\0','2025-05-14 06:51:39',NULL,'2025-05-14 06:51:39',NULL,NULL,NULL),(18,'civic-exterior-car-roof.avif','C:\\fakepath',_binary '\0','2025-05-23 06:20:58',NULL,'2025-05-23 06:20:58',NULL,NULL,NULL),(19,'1697440482-03-tata-harrier-rear-exterior.webp','C:\\fakepath',_binary '\0','2025-05-23 07:34:49',NULL,'2025-05-23 07:34:49',NULL,NULL,NULL),(20,'anime-moon-landscape.jpg','C:\\fakepath',_binary '\0','2025-05-23 07:40:20',NULL,'2025-05-23 07:40:20',NULL,NULL,NULL);
/*!40000 ALTER TABLE `rental_License_img_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_duration_tbl`
--

DROP TABLE IF EXISTS `rental_duration_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_duration_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_duration_tbl`
--

LOCK TABLES `rental_duration_tbl` WRITE;
/*!40000 ALTER TABLE `rental_duration_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `rental_duration_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_shop_img_tbl`
--

DROP TABLE IF EXISTS `rental_shop_img_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_shop_img_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_img_tbl`
--

LOCK TABLES `rental_shop_img_tbl` WRITE;
/*!40000 ALTER TABLE `rental_shop_img_tbl` DISABLE KEYS */;
INSERT INTO `rental_shop_img_tbl` VALUES (73,'Abstract - Nature.jpg','C:\\fakepath',_binary '\0','2025-05-11 18:24:52',NULL,'2025-05-11 18:24:52',NULL,NULL,NULL),(74,'Anime-Girl3.png','C:\\fakepath',_binary '\0','2025-05-14 05:20:38',NULL,'2025-05-14 05:20:38',NULL,NULL,NULL),(75,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:01:42',NULL,'2025-05-14 06:01:42',NULL,NULL,NULL),(76,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:14',NULL,'2025-05-14 06:04:14',NULL,NULL,NULL),(77,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:17',NULL,'2025-05-14 06:04:17',NULL,NULL,NULL),(78,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:04:55',NULL,'2025-05-14 06:04:55',NULL,NULL,NULL),(79,'404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:05:40',NULL,'2025-05-14 06:05:40',NULL,NULL,NULL),(80,'Anime-Girl2.png','C:\\fakepath',_binary '\0','2025-05-14 06:51:39',NULL,'2025-05-14 06:51:39',NULL,NULL,NULL),(81,'bonnet.avif','C:\\fakepath',_binary '\0','2025-05-23 06:20:58',NULL,'2025-05-23 06:20:58',NULL,NULL,NULL),(82,'anime-moon-landscape.jpg','C:\\fakepath',_binary '\0','2025-05-23 07:34:49',NULL,'2025-05-23 07:34:49',NULL,NULL,NULL),(83,'_.jpeg','C:\\fakepath',_binary '\0','2025-05-23 07:40:20',NULL,'2025-05-23 07:40:20',NULL,NULL,NULL);
/*!40000 ALTER TABLE `rental_shop_img_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental_shop_tbl`
--

DROP TABLE IF EXISTS `rental_shop_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_shop_tbl` (
  `id` char(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` text NOT NULL,
  `gst_no` char(15) DEFAULT NULL,
  `pincode` char(6) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `isApproved` bit(1) DEFAULT b'0',
  `rentalImage_id` int NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  `rental_License_img_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `rentalImage_id` (`rentalImage_id`),
  KEY `rental_License_img_id` (`rental_License_img_id`),
  CONSTRAINT `rental_shop_tbl_ibfk_1` FOREIGN KEY (`rentalImage_id`) REFERENCES `rental_shop_img_tbl` (`id`),
  CONSTRAINT `rental_shop_tbl_ibfk_2` FOREIGN KEY (`rental_License_img_id`) REFERENCES `rental_License_img_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_tbl`
--

LOCK TABLES `rental_shop_tbl` WRITE;
/*!40000 ALTER TABLE `rental_shop_tbl` DISABLE KEYS */;
INSERT INTO `rental_shop_tbl` VALUES (' bGAgSPyGH','Vilora','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',_binary '\0',81,_binary '\0','2025-05-23 06:20:58',NULL,'2025-05-24 06:36:27',NULL,NULL,NULL,18),('9UHGOgVYb','divya','Siruvachur','875556644564334','636112','Salem','Tamil Nadu',_binary '',82,_binary '\0','2025-05-23 07:34:50',NULL,'2025-05-24 06:36:55',NULL,NULL,NULL,19),('KGdpyt8uRr','Karthi Rentals','no 9jeeva street east extent mutharaiyarpalayam','54545454545','65009','puducherry','Puducherry',_binary '',80,_binary '\0','2025-05-14 06:51:39',NULL,'2025-05-24 06:37:55',NULL,NULL,NULL,17),('mGqyCl881A','gopikasri','Siruvachur','86547653253634','636112','Salem','Tamil Nadu',_binary '',83,_binary '\0','2025-05-23 07:40:20',NULL,'2025-05-24 06:36:30',NULL,NULL,NULL,20),('VsA46zQqyF','Rentals','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',_binary '',74,_binary '\0','2025-05-14 05:20:39',NULL,'2025-05-24 06:24:05',NULL,NULL,NULL,11),('xclBp7F1ln','SELVA','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',_binary '',79,_binary '\0','2025-05-14 06:05:40','14','2025-05-14 11:31:44',NULL,NULL,NULL,16);
/*!40000 ALTER TABLE `rental_shop_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `return_status`
--

DROP TABLE IF EXISTS `return_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `return_status` (
  `id` char(10) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `return_time` datetime NOT NULL,
  `description` text,
  `isDeleted` bit(1) DEFAULT b'0',
  `extra_charges` double(6,2) DEFAULT NULL,
  `booking_id` char(10) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `return_status_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `booking_details` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `return_status`
--

LOCK TABLES `return_status` WRITE;
/*!40000 ALTER TABLE `return_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `return_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop_owner_tbl`
--

DROP TABLE IF EXISTS `shop_owner_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop_owner_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rentalShop_id` char(10) DEFAULT NULL,
  `address` text NOT NULL,
  `password` char(60) DEFAULT NULL,
  `proofName` varchar(100) NOT NULL,
  `proofPath` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `aadhaarNumber` char(12) NOT NULL,
  `createdBy` char(10) DEFAULT NULL,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `phoneNumber` (`phoneNumber`),
  UNIQUE KEY `email` (`email`),
  KEY `rentalShop_id` (`rentalShop_id`),
  CONSTRAINT `shop_owner_tbl_ibfk_1` FOREIGN KEY (`rentalShop_id`) REFERENCES `rental_shop_tbl` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_owner_tbl`
--

LOCK TABLES `shop_owner_tbl` WRITE;
/*!40000 ALTER TABLE `shop_owner_tbl` DISABLE KEYS */;
INSERT INTO `shop_owner_tbl` VALUES (10,'ThamizhSelvam','9585791472','thamizhselvam8428@gmail.com','VsA46zQqyF','no 9jeeva street east extent mutharaiyarpalayam','$2b$04$NYiQpkHkXF0qUFmr4SG41ulRR5ERP8A8mqPEkJJBBp7CWMcQJt6Be','404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 05:20:39','2025-05-14 05:20:39','545478547654',NULL,NULL,NULL,NULL),(14,'Selva','8754875489','selva@gmail.com','xclBp7F1ln','no 9jeeva street east extent mutharaiyarpalayam','$2b$04$PKkmeiXNrw/GkmMXWvwUG.87Z3l04MNJoEogFb7I9UJu.qoQe2NKC','404-page_not_found.png','C:\\fakepath',_binary '\0','2025-05-14 06:05:40','2025-05-14 06:05:40','555555555555',NULL,NULL,NULL,NULL),(15,'Kathi','8457965485','karthi@gmail.com','KGdpyt8uRr','no 9jeeva street east extent mutharaiyarpalayam','$2b$04$nz9fZwMOHo049ElVEeFcsuBEuGOP0Rg0PM2Cwr4T7LYbxbkSyMyyO','Anime-Girl2.png','C:\\fakepath',_binary '\0','2025-05-14 06:51:39','2025-05-14 06:51:39','454545454545',NULL,NULL,NULL,NULL),(16,'Vilora','84285476595','vilora@gmail.com',' bGAgSPyGH','no 9jeeva street east extent mutharaiyarpalayam','$2b$04$UhsqX1ILupS/L2IJeJKwROazUESPDiStSgiWvnfWK3.izPfY.UIei','civic-exterior-car-roof.avif','C:\\fakepath',_binary '\0','2025-05-23 06:20:58','2025-05-23 06:20:58','123232323232',NULL,NULL,NULL,NULL),(17,'divya','9764453251','divya123@gmail.com','9UHGOgVYb','Siruvachur','$2b$04$kahNGgSiHAJieBiYMsVwf.9vfabGdw0RJehXdJ345OM/sWE0Ef45.','_.jpeg','C:\\fakepath',_binary '\0','2025-05-23 07:34:50','2025-05-23 07:34:50','987654326538',NULL,NULL,NULL,NULL),(18,'gopika','8776453240','gopika@gmail.com','mGqyCl881A','Siruvachur','$2b$04$wIE/hHofxoUDZ3HeG4BlieiKNzPB/m2sSU2fa/UuI59eDKzKAGVZq','1697440482-03-tata-harrier-rear-exterior.webp','C:\\fakepath',_binary '\0','2025-05-23 07:40:20','2025-05-23 07:40:20','876543235650',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `shop_owner_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_catagories_tbl`
--

DROP TABLE IF EXISTS `sub_catagories_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_catagories_tbl` (
  `id` char(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_catagories_tbl`
--

LOCK TABLES `sub_catagories_tbl` WRITE;
/*!40000 ALTER TABLE `sub_catagories_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_catagories_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `superadmin_tbl`
--

DROP TABLE IF EXISTS `superadmin_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `superadmin_tbl` (
  `id` char(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(60) NOT NULL,
  `failedLoginAttempts` int DEFAULT '3',
  `status` bit(1) DEFAULT b'0',
  `adminRoleId` int DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `adminRoleId` (`adminRoleId`),
  CONSTRAINT `superadmin_tbl_ibfk_1` FOREIGN KEY (`adminRoleId`) REFERENCES `adminrole_tbl` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `superadmin_tbl`
--

LOCK TABLES `superadmin_tbl` WRITE;
/*!40000 ALTER TABLE `superadmin_tbl` DISABLE KEYS */;
INSERT INTO `superadmin_tbl` VALUES ('G3rxp848ph','THAMIZH SELVAM','donselva27@gmail.com','$2b$05$enFZWGthwJeUN0i88TtL2OARzFCKlN98gOHV7MBtvsdm2NV3uq4w2',3,_binary '\0',29,_binary '\0','2025-05-15 10:54:07',NULL,'2025-05-15 10:54:07',NULL,NULL,NULL),('vdHFTEfZxn','Sabitha ','sabikathir29@gmail.com','$2b$05$YWkiHRuUPlTR6Ne1JUzUbuKJxnzZ8EgmpD4L1qR/GzuQ9JdfIfIOO',3,_binary '\0',29,_binary '\0','2025-05-17 08:41:09',NULL,'2025-05-17 08:41:09',NULL,NULL,NULL),('Yw9mFhz7DZ','Admin','admin@gmail.com','$2b$05$oL/bq4qCDIKFv8dpwyX4yOnLmfo2XBF.YR2Sk4dTWsnhRyZ.sfrwe',3,_binary '\0',NULL,_binary '\0','2025-05-12 09:58:52',NULL,'2025-05-12 09:58:52',NULL,NULL,NULL);
/*!40000 ALTER TABLE `superadmin_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transmission_tbl`
--

DROP TABLE IF EXISTS `transmission_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transmission_tbl` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transmission_tbl`
--

LOCK TABLES `transmission_tbl` WRITE;
/*!40000 ALTER TABLE `transmission_tbl` DISABLE KEYS */;
INSERT INTO `transmission_tbl` VALUES (5,'Manual','2025-05-13 09:23:28','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:23:28',NULL,NULL,NULL),(6,'Automatic','2025-05-13 09:23:34','Yw9mFhz7DZ',_binary '\0','2025-05-13 09:23:34',NULL,NULL,NULL);
/*!40000 ALTER TABLE `transmission_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` char(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNo` varchar(13) NOT NULL,
  `password` char(60) NOT NULL,
  `Address` text NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `id_proof_name` varchar(255) NOT NULL,
  `id_proof_path` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `pincode` char(6) NOT NULL,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phoneNo` (`phoneNo`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('L9bYLidBlK','Karthi','karthi@gmail.com','9585758548','$2b$05$krKZmn5HQlBCYNCt0nsKneKB83hXw0AbQnhREQtWpVKmEGi8LBTnq','no 9jeeva street east extent mutharaiyarpalayam','puducherry','Puducherry','1748187490712-AIM_YT__1_.png','/opt/render/project/src/Backend/src',_binary '\0','2025-05-25 15:38:12',NULL,'2025-05-25 15:38:12','65009',NULL,NULL,NULL),('VHW59TMGBX','Selva','thamizhselvam8428@gmail.com','8428961472','$2b$05$JuM/lSU4F.0vavEj.7yfteiFcoDl3sNyS9qPlDF2dH4ANmA7Oe0Qq','no 9jeeva street east extent mutharaiyarpalayam','puducherry','Puducherry','1747638272316-404-page_not_found.png','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src',_binary '\0','2025-05-19 07:04:32',NULL,'2025-05-19 07:04:32','65009',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_image_tbl`
--

DROP TABLE IF EXISTS `vehicle_image_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_image_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(255) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `vehicle_id` char(10) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicle_id` (`vehicle_id`),
  CONSTRAINT `vehicle_image_tbl_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_tbl` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_image_tbl`
--

LOCK TABLES `vehicle_image_tbl` WRITE;
/*!40000 ALTER TABLE `vehicle_image_tbl` DISABLE KEYS */;
INSERT INTO `vehicle_image_tbl` VALUES (54,'1747976516000-bonnet.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(55,'1747976516004-civic-exterior-car-roof.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(56,'1747976516005-civic-interior-front-row-seats.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(57,'1747976516006-civic-interior-horn-boss.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(58,'1747976516006-Honda-Civic-Exterior-164242.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(59,'1747981817624-bonnet.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(60,'1747981817624-civic-exterior-car-roof.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(61,'1747981817625-civic-interior-front-row-seats.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(62,'1747981817625-civic-interior-horn-boss.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(63,'1747981817625-mainimage.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL);
/*!40000 ALTER TABLE `vehicle_image_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle_tbl`
--

DROP TABLE IF EXISTS `vehicle_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_tbl` (
  `id` char(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `registration_no` varchar(50) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `rentalShop_id` char(10) DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `brand_id` int DEFAULT NULL,
  `fuel_id` int DEFAULT NULL,
  `transmission_id` int DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `seats` char(17) NOT NULL,
  `Vehicle_img_path` varchar(255) DEFAULT NULL,
  `Vehicle_img_name` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registration_no` (`registration_no`),
  KEY `category_id` (`category_id`),
  KEY `rentalShop_id` (`rentalShop_id`),
  KEY `vehicle_tbl_ibfk_3` (`brand_id`),
  KEY `vehicle_tbl_ibfk_4` (`fuel_id`),
  KEY `vehicle_tbl_ibfk_5` (`transmission_id`),
  CONSTRAINT `vehicle_tbl_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_2` FOREIGN KEY (`rentalShop_id`) REFERENCES `rental_shop_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `brand_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_4` FOREIGN KEY (`fuel_id`) REFERENCES `fuel_type_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_5` FOREIGN KEY (`transmission_id`) REFERENCES `transmission_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_tbl`
--

LOCK TABLES `vehicle_tbl` WRITE;
/*!40000 ALTER TABLE `vehicle_tbl` DISABLE KEYS */;
INSERT INTO `vehicle_tbl` VALUES ('UNXqy7JH2J','Civic','233','Redssss','PY 01 05 8343',NULL,1,'xclBp7F1ln',_binary '\0','2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 06:04:42','xclBp7F1ln',NULL,NULL,2,45,6,2000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1747980282104-mainimage.webp','Good Car'),('ypdG5q4cSr','Audi A6','2001','Red','PY 01 05 834221',NULL,1,'VsA46zQqyF',_binary '\0','2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL,11,46,6,2000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1747981817618-Honda-Civic-Exterior-164242.avif','am a car');
/*!40000 ALTER TABLE `vehicle_tbl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vehicle_id` char(10) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicle_id` (`vehicle_id`),
  CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-26  0:42:19
