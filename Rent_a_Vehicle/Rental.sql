-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: rentalsystem_db
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminrole_tbl`
--

LOCK TABLES `adminrole_tbl` WRITE;
/*!40000 ALTER TABLE `adminrole_tbl` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_tbl`
--

LOCK TABLES `brand_tbl` WRITE;
/*!40000 ALTER TABLE `brand_tbl` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tbl`
--

LOCK TABLES `categories_tbl` WRITE;
/*!40000 ALTER TABLE `categories_tbl` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuel_type_tbl`
--

LOCK TABLES `fuel_type_tbl` WRITE;
/*!40000 ALTER TABLE `fuel_type_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `fuel_type_tbl` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_img_tbl`
--

LOCK TABLES `rental_shop_img_tbl` WRITE;
/*!40000 ALTER TABLE `rental_shop_img_tbl` DISABLE KEYS */;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `rentalImage_id` (`rentalImage_id`),
  CONSTRAINT `rental_shop_tbl_ibfk_1` FOREIGN KEY (`rentalImage_id`) REFERENCES `rental_shop_img_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_tbl`
--

LOCK TABLES `rental_shop_tbl` WRITE;
/*!40000 ALTER TABLE `rental_shop_tbl` DISABLE KEYS */;
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
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `phoneNumber` (`phoneNumber`),
  UNIQUE KEY `email` (`email`),
  KEY `rentalShop_id` (`rentalShop_id`),
  CONSTRAINT `shop_owner_tbl_ibfk_1` FOREIGN KEY (`rentalShop_id`) REFERENCES `rental_shop_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_owner_tbl`
--

LOCK TABLES `shop_owner_tbl` WRITE;
/*!40000 ALTER TABLE `shop_owner_tbl` DISABLE KEYS */;
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
/*!40000 ALTER TABLE `superadmin_tbl` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_image_tbl`
--

LOCK TABLES `vehicle_image_tbl` WRITE;
/*!40000 ALTER TABLE `vehicle_image_tbl` DISABLE KEYS */;
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
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registration_no` (`registration_no`),
  KEY `category_id` (`category_id`),
  KEY `rentalShop_id` (`rentalShop_id`),
  CONSTRAINT `vehicle_tbl_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_2` FOREIGN KEY (`rentalShop_id`) REFERENCES `rental_shop_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_tbl`
--

LOCK TABLES `vehicle_tbl` WRITE;
/*!40000 ALTER TABLE `vehicle_tbl` DISABLE KEYS */;
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

-- Dump completed on 2025-04-23 12:30:13
