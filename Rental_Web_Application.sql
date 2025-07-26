-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rental_clg_database
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_on_item`
--

/*!40000 ALTER TABLE `add_on_item` DISABLE KEYS */;
INSERT INTO `add_on_item` VALUES (1,'GPS Navigation System',200.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(2,'Child Safety Seat',150.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(3,'Extra Driver License',300.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(4,'Fuel Tank Full',500.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(5,'Roadside Assistance',250.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(6,'Mobile Phone Charger',50.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(7,'First Aid Kit',100.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(8,'Helmet (for 2-wheelers)',75.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(9,'Bluetooth Speaker',125.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL),(10,'Vehicle Insurance Premium',400.00,0x00,'2025-06-05 16:54:10','ADMIN001','2025-06-05 16:54:10',NULL,NULL,NULL);
/*!40000 ALTER TABLE `add_on_item` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminrole_tbl`
--

/*!40000 ALTER TABLE `adminrole_tbl` DISABLE KEYS */;
INSERT INTO `adminrole_tbl` VALUES (29,'ADMIN',0x00,'2025-05-15 10:54:07',NULL,'2025-05-15 10:54:07',NULL,NULL,NULL),(30,'WWWWWW',0x00,'2025-07-01 08:44:43',NULL,'2025-07-01 08:44:43',NULL,NULL,NULL);
/*!40000 ALTER TABLE `adminrole_tbl` ENABLE KEYS */;

--
-- Table structure for table `area_tbl`
--

DROP TABLE IF EXISTS `area_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Area_name` varchar(255) NOT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_tbl`
--

/*!40000 ALTER TABLE `area_tbl` DISABLE KEYS */;
INSERT INTO `area_tbl` VALUES (1,'Mutharaiyarpalayam',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(2,'White Town',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(3,'Heritage Town',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(4,'Lawspet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(5,'Muthialpet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(6,'Orleanpet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(7,'Reddiarpalayam',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(8,'Kottakuppam',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(9,'Ariyankuppam',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(10,'Mudaliarpet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(11,'Kurumbapet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(12,'White Town',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(13,'Heritage Town',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(14,'Lawspet',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL),(15,'Muthialpet',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(16,'Orleanpet',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(17,'Reddiarpalayam',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(18,'Kottakuppam',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(19,'Ariyankuppam',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(20,'Mudaliarpet',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(21,'Kurumbapet',0x00,NULL,NULL,NULL,NULL,NULL,NULL),(22,'Mutharaiyarpalayam',0x00,'2025-07-01 11:30:35',NULL,'2025-07-01 11:30:35',NULL,NULL,NULL),(23,'Mutharaiyarpalayam',0x00,'2025-07-01 11:33:46',NULL,'2025-07-01 11:33:46',NULL,NULL,NULL),(24,'Mutharaiyarpalayam',0x00,'2025-07-01 11:37:19',NULL,'2025-07-01 11:37:19',NULL,NULL,NULL),(25,'Mutharaiyarpalayam',0x00,'2025-07-01 11:38:04',NULL,'2025-07-01 11:38:04',NULL,NULL,NULL),(26,'Mutharaiyarpalayam',0x00,'2025-07-01 11:38:32',NULL,'2025-07-01 11:38:32',NULL,NULL,NULL),(27,'Mutharaiyarpalayam',0x00,'2025-07-01 11:40:04',NULL,'2025-07-01 11:40:04',NULL,NULL,NULL),(28,'Mutharaiyarpalayam',0x00,'2025-07-01 11:44:58',NULL,'2025-07-01 11:44:58',NULL,NULL,NULL),(29,'Mutharaiyarpalayam',0x00,'2025-07-01 11:45:32',NULL,'2025-07-01 11:45:32',NULL,NULL,NULL),(30,'Mutharaiyarpalayam',0x00,'2025-07-01 11:46:02',NULL,'2025-07-01 11:46:02',NULL,NULL,NULL),(31,'Mutharaiyarpalayam',0x00,'2025-07-01 11:46:32',NULL,'2025-07-01 11:46:32',NULL,NULL,NULL),(32,'Mutharaiyarpalayam',0x00,'2025-07-01 12:02:47',NULL,'2025-07-01 12:02:47',NULL,NULL,NULL),(33,'sssssssssss',0x00,'2025-07-01 15:17:58',NULL,'2025-07-01 15:17:58',NULL,NULL,NULL),(34,'sssssssssss',0x00,'2025-07-01 15:18:01',NULL,'2025-07-01 15:18:01',NULL,NULL,NULL),(35,'Mutharaiyarpalayam',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 15:20:55',NULL,NULL,NULL),(36,'Mutharaiyarpalayam',0x00,'2025-07-01 15:52:15',NULL,'2025-07-01 15:52:15',NULL,NULL,NULL),(37,'Mutharaiyarpalayam',0x00,'2025-07-01 15:53:16',NULL,'2025-07-01 15:53:16',NULL,NULL,NULL),(38,'Mutharaiyarpalayam',0x00,'2025-07-01 15:53:43',NULL,'2025-07-01 15:53:43',NULL,NULL,NULL),(39,'Mutharaiyarpalayam',0x00,'2025-07-01 15:54:02',NULL,'2025-07-01 15:54:02',NULL,NULL,NULL),(40,'Mutharaiyarpalayam',0x00,'2025-07-01 15:54:18',NULL,'2025-07-01 15:54:18',NULL,NULL,NULL),(41,'Mutharaiyarpalayam',0x00,'2025-07-01 15:54:56',NULL,'2025-07-01 15:54:56',NULL,NULL,NULL),(42,'Mutharaiyarpalayam',0x00,'2025-07-01 15:55:36',NULL,'2025-07-01 15:55:36',NULL,NULL,NULL),(43,'Mutharaiyarpalayam',0x00,'2025-07-01 17:43:42',NULL,'2025-07-01 17:43:42',NULL,NULL,NULL),(44,'Mutharaiyarpalayam',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL);
/*!40000 ALTER TABLE `area_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `booking_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_details` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand_tbl`
--

/*!40000 ALTER TABLE `brand_tbl` DISABLE KEYS */;
INSERT INTO `brand_tbl` VALUES (1,'Toyota','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:19:55',NULL,NULL,NULL),(2,'Honda','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(3,'Ford','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(4,'Chevrolet','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(5,'Nissan','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(6,'BMW','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(7,'Mercedes-Benz','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(8,'Volkswagen','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(9,'Hyundai','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(10,'Kia','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(11,'Audi','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(12,'Lexus','2025-05-12 09:22:55','Yw9mFhz7DZ',0x01,'2025-07-01 16:39:59',NULL,'2025-07-01 16:39:59','Yw9mFhz7DZ'),(13,'Subaru','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(14,'Mazda','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(15,'Jeep','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(16,'Tesla','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(17,'Volvo','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(18,'Porsche','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(19,'Jaguar','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(20,'Land Rover','2025-05-12 09:22:55','Yw9mFhz7DZ',0x00,'2025-05-13 09:20:19',NULL,NULL,NULL),(22,'s','2025-05-13 09:19:04','Yw9mFhz7DZ',0x01,'2025-07-01 09:40:05',NULL,'2025-07-01 09:40:05','Yw9mFhz7DZ'),(23,'Maruthi','2025-05-26 10:08:32','Yw9mFhz7DZ',0x00,'2025-05-26 10:08:49',NULL,NULL,NULL),(24,'Tvs','2025-05-27 06:01:44','Yw9mFhz7DZ',0x00,'2025-05-27 06:01:44',NULL,NULL,NULL),(25,'Hero','2025-05-27 06:24:48','Yw9mFhz7DZ',0x00,'2025-05-27 06:24:48',NULL,NULL,NULL),(26,'Selva','2025-07-01 09:08:12','Yw9mFhz7DZ',0x01,'2025-07-01 09:41:25',NULL,'2025-07-01 09:41:25','Yw9mFhz7DZ'),(27,'eweeeeee','2025-07-01 16:38:55','Yw9mFhz7DZ',0x01,'2025-07-01 16:39:08',NULL,'2025-07-01 16:39:08','Yw9mFhz7DZ'),(30,' ddd','2025-07-01 16:40:05','12',0x01,'2025-07-01 16:43:11',NULL,'2025-07-01 16:43:11','Yw9mFhz7DZ'),(31,' sssssss','2025-07-01 16:40:47','12',0x01,'2025-07-01 16:43:10',NULL,'2025-07-01 16:43:10','Yw9mFhz7DZ'),(32,'ASDSASdfasd','2025-07-01 16:46:00','Yw9mFhz7DZ',0x00,'2025-07-01 16:46:00',NULL,NULL,NULL),(33,'ADSFASDFDS','2025-07-01 16:46:39','Yw9mFhz7DZ',0x00,'2025-07-01 16:46:39',NULL,NULL,NULL);
/*!40000 ALTER TABLE `brand_tbl` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tbl`
--

/*!40000 ALTER TABLE `categories_tbl` DISABLE KEYS */;
INSERT INTO `categories_tbl` VALUES (1,'Car','A standard passenger car available for rent, ideal for daily transportation..',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-06-03 14:06:50','G3rxp848ph',NULL,NULL),(2,'Bike','A two-wheeled vehicle for rent, perfect for individual and eco-friendly transport.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(3,'Van','A spacious vehicle for rent, suitable for families or groups, also for transporting goods.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(4,'SUV','Sport Utility Vehicle for rent, offering both comfort and off-road capability.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(5,'Motorcycle','A two-wheeled vehicle for rent, providing fast and efficient travel for individuals.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(6,'Electric Car','A fully electric vehicle for rent, offering a sustainable and eco-friendly ride.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(7,'Luxury Car','High-end cars available for rent, providing a premium and comfortable driving experience.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(8,'Minivan','A rental vehicle designed for families or groups, with plenty of space and comfort.',0x00,'2025-05-12 09:29:09','Yw9mFhz7DZ','2025-05-13 09:20:44',NULL,NULL,NULL),(9,'d','d',0x01,'2025-05-12 17:42:53','Yw9mFhz7DZ','2025-07-01 10:44:24',NULL,'2025-07-01 10:44:24','Yw9mFhz7DZ'),(10,'w','w',0x01,'2025-05-12 17:45:24','Yw9mFhz7DZ','2025-07-01 10:44:06',NULL,'2025-07-01 10:44:06','Yw9mFhz7DZ'),(12,'wsade','sawde',0x01,'2025-05-13 09:21:20','Yw9mFhz7DZ','2025-07-01 10:45:12',NULL,'2025-07-01 10:45:12','Yw9mFhz7DZ'),(13,'sdsa','asdasd',0x01,'2025-05-15 10:58:20','G3rxp848ph','2025-07-01 10:45:10',NULL,'2025-07-01 10:45:10','Yw9mFhz7DZ'),(14,'ASD','ASD',0x01,'2025-05-23 06:16:18',NULL,'2025-07-01 10:45:05',NULL,'2025-07-01 10:45:05','Yw9mFhz7DZ'),(15,'s','s',0x01,'2025-05-27 05:58:11','Yw9mFhz7DZ','2025-07-01 10:45:03',NULL,'2025-07-01 10:45:03','Yw9mFhz7DZ'),(16,'Selva','xddd',0x01,'2025-07-01 07:21:05','Yw9mFhz7DZ','2025-07-01 10:45:07',NULL,'2025-07-01 10:45:07','Yw9mFhz7DZ'),(18,'asdfasdfasd','asdfasdfasdf',0x01,'2025-07-01 16:38:37','Yw9mFhz7DZ','2025-07-01 16:38:42',NULL,'2025-07-01 16:38:42','Yw9mFhz7DZ');
/*!40000 ALTER TABLE `categories_tbl` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fuel_type_tbl`
--

/*!40000 ALTER TABLE `fuel_type_tbl` DISABLE KEYS */;
INSERT INTO `fuel_type_tbl` VALUES (44,'Petrol','2025-05-13 09:22:09','Yw9mFhz7DZ',0x00,'2025-05-13 09:22:09',NULL,NULL,NULL),(45,'Desiel','2025-05-13 09:22:18','Yw9mFhz7DZ',0x00,'2025-05-13 09:22:18',NULL,NULL,NULL),(46,'Ev','2025-05-13 09:22:23','Yw9mFhz7DZ',0x00,'2025-05-13 09:22:23',NULL,NULL,NULL),(47,'Selva','2025-07-01 09:08:05','Yw9mFhz7DZ',0x01,'2025-07-01 09:36:25',NULL,'2025-07-01 09:36:25','Yw9mFhz7DZ'),(48,'eeee','2025-07-01 09:37:15','Yw9mFhz7DZ',0x01,'2025-07-01 09:37:43',NULL,'2025-07-01 09:37:43','Yw9mFhz7DZ'),(49,'eeeeeeeeeee','2025-07-01 09:37:38','Yw9mFhz7DZ',0x01,'2025-07-01 09:37:41',NULL,'2025-07-01 09:37:41','Yw9mFhz7DZ'),(50,'DDDD','2025-07-01 16:49:29','Yw9mFhz7DZ',0x01,'2025-07-01 16:49:32',NULL,'2025-07-01 16:49:32','Yw9mFhz7DZ');
/*!40000 ALTER TABLE `fuel_type_tbl` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_duration_tbl`
--

/*!40000 ALTER TABLE `rental_duration_tbl` DISABLE KEYS */;
INSERT INTO `rental_duration_tbl` VALUES (1,'1 Hour','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(2,'3 Hours','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(3,'6 Hours','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(4,'12 Hours','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(5,'1 Day','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(6,'2 Days','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(7,'3 Days','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(8,'1 Week','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(9,'2 Weeks','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL),(10,'1 Month','2025-06-05 16:52:18','ADMIN001',0x00,'2025-06-05 16:52:18',NULL,NULL,NULL);
/*!40000 ALTER TABLE `rental_duration_tbl` ENABLE KEYS */;

--
-- Table structure for table `rental_license_img_tbl`
--

DROP TABLE IF EXISTS `rental_license_img_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_license_img_tbl` (
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
  `rentalshop_id` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rentalshopid` (`rentalshop_id`),
  CONSTRAINT `rentalshopid` FOREIGN KEY (`rentalshop_id`) REFERENCES `rental_shop_tbl` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_license_img_tbl`
--

/*!40000 ALTER TABLE `rental_license_img_tbl` DISABLE KEYS */;
INSERT INTO `rental_license_img_tbl` VALUES (10,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-11 18:24:52',NULL,'2025-05-11 18:24:52',NULL,NULL,NULL,NULL),(11,'Abstract - Nature.jpg','C:\\fakepath',0x00,'2025-05-14 05:20:39',NULL,'2025-05-14 05:20:39',NULL,NULL,NULL,NULL),(12,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-14 06:01:42',NULL,'2025-05-14 06:01:42',NULL,NULL,NULL,NULL),(13,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-14 06:04:14',NULL,'2025-05-14 06:04:14',NULL,NULL,NULL,NULL),(14,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-14 06:04:17',NULL,'2025-05-14 06:04:17',NULL,NULL,NULL,NULL),(15,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-14 06:04:55',NULL,'2025-05-14 06:04:55',NULL,NULL,NULL,NULL),(16,'404-page_not_found.png','C:\\fakepath',0x00,'2025-05-14 06:05:40',NULL,'2025-05-14 06:05:40',NULL,NULL,NULL,NULL),(17,'Anime-Girl3.png','C:\\fakepath',0x00,'2025-05-14 06:51:39',NULL,'2025-05-14 06:51:39',NULL,NULL,NULL,NULL),(18,'civic-exterior-car-roof.avif','C:\\fakepath',0x00,'2025-05-23 06:20:58',NULL,'2025-05-23 06:20:58',NULL,NULL,NULL,NULL),(20,'anime-moon-landscape.jpg','C:\\fakepath',0x00,'2025-05-23 07:40:20',NULL,'2025-05-23 07:40:20',NULL,NULL,NULL,NULL),(21,'luggage-1149289.jpg','C:\\fakepath',0x00,'2025-06-03 06:34:57',NULL,'2025-06-03 06:34:57',NULL,NULL,NULL,NULL),(22,'404-page_not_found.png','C:\\fakepath',0x00,'2025-06-04 12:40:50',NULL,'2025-06-04 12:40:50',NULL,NULL,NULL,NULL),(23,'404-page_not_found.png','C:\\fakepath',0x00,'2025-06-04 12:41:25',NULL,'2025-06-04 12:41:25',NULL,NULL,NULL,NULL),(24,'Anime-Girl4.png','C:\\fakepath',0x00,'2025-06-04 13:44:07',NULL,'2025-06-04 13:44:07',NULL,NULL,NULL,NULL),(25,'1751369386813-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:29:46',NULL,'2025-07-01 11:29:46',NULL,NULL,NULL,NULL),(26,'1751369435540-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:30:35',NULL,'2025-07-01 11:30:35',NULL,NULL,NULL,NULL),(27,'1751369626153-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:33:46',NULL,'2025-07-01 11:33:46',NULL,NULL,NULL,NULL),(28,'1751369839150-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:37:19',NULL,'2025-07-01 11:37:19',NULL,NULL,NULL,NULL),(29,'1751369884616-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:38:04',NULL,'2025-07-01 11:38:04',NULL,NULL,NULL,NULL),(30,'1751369912430-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:38:32',NULL,'2025-07-01 11:38:32',NULL,NULL,NULL,NULL),(31,'1751370004617-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:40:04',NULL,'2025-07-01 11:40:04',NULL,NULL,NULL,NULL),(32,'1751370298583-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:44:58',NULL,'2025-07-01 11:44:58',NULL,NULL,NULL,NULL),(33,'1751370332139-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:45:32',NULL,'2025-07-01 11:45:32',NULL,NULL,NULL,NULL),(34,'1751370362461-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:46:02',NULL,'2025-07-01 11:46:02',NULL,NULL,NULL,NULL),(35,'1751370392414-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 11:46:32',NULL,'2025-07-01 11:46:32',NULL,NULL,NULL,NULL),(36,'1751371367066-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 12:02:47',NULL,'2025-07-01 14:45:54',NULL,NULL,NULL,'aAZw7GBAr4'),(37,'1751383078166-yokes_6_1_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:17:58',NULL,'2025-07-01 15:17:58',NULL,NULL,NULL,NULL),(38,'1751383081850-yokes_6_1_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:18:01',NULL,'2025-07-01 15:18:01',NULL,NULL,NULL,NULL),(39,'1751383255106-Face_Voting_-_Report_1_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 15:20:55',NULL,NULL,NULL,NULL),(40,'1751385135403-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:52:15',NULL,'2025-07-01 15:52:15',NULL,NULL,NULL,NULL),(41,'1751385195996-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:53:16',NULL,'2025-07-01 15:53:16',NULL,NULL,NULL,NULL),(42,'1751385223646-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:53:43',NULL,'2025-07-01 15:53:43',NULL,NULL,NULL,NULL),(43,'1751385242572-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:54:02',NULL,'2025-07-01 15:54:02',NULL,NULL,NULL,NULL),(44,'1751385258389-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:54:18',NULL,'2025-07-01 15:54:18',NULL,NULL,NULL,NULL),(45,'1751385296470-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:54:56',NULL,'2025-07-01 15:54:56',NULL,NULL,NULL,NULL),(46,'1751385336399-copyright12_-_Copy__2_.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 15:55:36',NULL,'2025-07-01 15:55:36',NULL,NULL,NULL,NULL),(47,'1751391822741-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 17:43:42',NULL,'2025-07-01 17:43:42',NULL,NULL,NULL,NULL),(48,'1751391885256-Face_yokesh_FINAL-_Report.pdf','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads\\pdf',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `rental_license_img_tbl` ENABLE KEYS */;

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
  `Rental_shop_id` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Rental_shop_id` (`Rental_shop_id`),
  CONSTRAINT `Rental_shop_id` FOREIGN KEY (`Rental_shop_id`) REFERENCES `rental_shop_tbl` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_img_tbl`
--

/*!40000 ALTER TABLE `rental_shop_img_tbl` DISABLE KEYS */;
INSERT INTO `rental_shop_img_tbl` VALUES (103,'1751385336404-download.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 16:05:28',NULL,NULL,NULL,'weM8dnAg0w'),(104,'1751385336404-shirodkar-bike-and-car-rental-services-calangute-goa-car-hire-3zzt1b2.avif','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 16:05:28',NULL,NULL,NULL,'weM8dnAg0w'),(105,'1751385336405-images__1_.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 16:05:28',NULL,NULL,NULL,'weM8dnAg0w'),(106,'1751385336405-malini-car-and-bike-rent-candolim-goa-car-rental-on-monthly-basis-38ktw7a2qr.webp','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 16:05:28',NULL,NULL,NULL,'weM8dnAg0w'),(107,'1751385336409-images.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 16:05:28',NULL,NULL,NULL,'weM8dnAg0w'),(108,'1751391885268-download.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,'Pm51gmkwfS'),(109,'1751391885269-shirodkar-bike-and-car-rental-services-calangute-goa-car-hire-3zzt1b2.avif','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,'Pm51gmkwfS'),(110,'1751391885269-images__1_.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,'Pm51gmkwfS'),(111,'1751391885270-malini-car-and-bike-rent-candolim-goa-car-rental-on-monthly-basis-38ktw7a2qr.webp','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,'Pm51gmkwfS'),(112,'1751391885273-images.jpg','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45',NULL,'2025-07-01 17:44:45',NULL,NULL,NULL,'Pm51gmkwfS');
/*!40000 ALTER TABLE `rental_shop_img_tbl` ENABLE KEYS */;

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
  `rentalImage_id` int DEFAULT NULL,
  `isDeleted` bit(1) DEFAULT b'0',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` char(10) DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedBy` char(10) DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `deletedBy` char(10) DEFAULT NULL,
  `rental_License_img_id` int DEFAULT NULL,
  `Area_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `rentalImage_id` (`rentalImage_id`),
  KEY `rental_shop_tbl_ibfk_2` (`rental_License_img_id`),
  KEY `rental_shop_tbl_ibfk_3` (`Area_id`),
  CONSTRAINT `rental_shop_tbl_ibfk_2` FOREIGN KEY (`rental_License_img_id`) REFERENCES `rental_license_img_tbl` (`id`),
  CONSTRAINT `rental_shop_tbl_ibfk_3` FOREIGN KEY (`Area_id`) REFERENCES `area_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_shop_tbl`
--

/*!40000 ALTER TABLE `rental_shop_tbl` DISABLE KEYS */;
INSERT INTO `rental_shop_tbl` VALUES (' bGAgSPyGH','Vilora','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',0x00,81,0x00,'2025-05-23 06:20:58',NULL,'2025-06-04 13:50:49',NULL,NULL,NULL,NULL,NULL),('9UHGOgVYb','divya','no 9jeeva street east extent mutharaiyarpalayam','875556644564334','636112','puducherry','Puducherry',0x00,82,0x00,'2025-05-23 07:34:50',NULL,'2025-07-01 12:03:50',NULL,NULL,NULL,NULL,NULL),('aAZw7GBAr4','wwwwwwwwwwww','no 9jeeva street east extent mutharaiyarpalayam','555555555555555','65009','puducherry','Puducherry',0x00,NULL,0x00,'2025-07-01 12:02:47',NULL,'2025-07-01 12:02:47',NULL,NULL,NULL,NULL,NULL),('KGdpyt8uRr','Karthi Rentals','no 9jeeva street east extent mutharaiyarpalayam','54545454545','65009','puducherry','Puducherry',0x00,80,0x00,'2025-05-14 06:51:39',NULL,'2025-07-01 12:03:50',NULL,NULL,NULL,NULL,NULL),('mGqyCl881A','gopikasri','no 9jeeva street east extent mutharaiyarpalayam','86547653253634','636112','puducherry','Puducherry',0x00,83,0x00,'2025-05-23 07:40:20',NULL,'2025-07-01 12:03:50',NULL,NULL,NULL,NULL,NULL),('Pm51gmkwfS','Karthi Bikes','no 9jeeva street east extent mutharaiyarpalayam','212134543212345','65009','puducherry','Puducherry',0x01,NULL,0x00,'2025-07-01 17:44:45',NULL,'2025-07-02 05:26:48',NULL,NULL,NULL,48,44),('TmvbDMaOB','Thamizh','no 9jeeva street east extent mutharaiyarpalayam','457585957585958','605009','puducherry','Puducherry',0x00,NULL,0x00,'2025-07-01 15:20:55',NULL,'2025-07-01 15:49:49',NULL,NULL,NULL,39,35),('VsA46zQqyF','Rentals','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',0x00,74,0x00,'2025-05-14 05:20:39',NULL,'2025-07-01 12:03:50',NULL,NULL,NULL,NULL,NULL),('weM8dnAg0w','222','no 9jeeva street east extent mutharaiyarpalayam','222222222222222','65009','puducherry','Puducherry',0x00,NULL,0x00,'2025-07-01 15:55:36',NULL,'2025-07-02 02:14:00',NULL,NULL,NULL,46,42),('xclBp7F1ln','SELVA','no 9jeeva street east extent mutharaiyarpalayam','5555555555','65009','puducherry','Puducherry',0x01,79,0x00,'2025-05-14 06:05:40','14','2025-07-02 02:15:58',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `rental_shop_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `return_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `return_status` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_owner_tbl`
--

/*!40000 ALTER TABLE `shop_owner_tbl` DISABLE KEYS */;
INSERT INTO `shop_owner_tbl` VALUES (26,'SELVA','8428961472','selva@gmail.com','xclBp7F1ln','no 9jeeva street east extent mutharaiyarpalayam','$2b$04$PKkmeiXNrw/GkmMXWvwUG.87Z3l04MNJoEogFb7I9UJu.qoQe2NKC','1747638272316-404-page_not_found.png','1747638272316-404-page_not_found.png',0x00,'2025-07-01 15:26:35','2025-07-01 17:11:30','845879578578',NULL,NULL,NULL,NULL),(31,'adminww','08428961422','adminwww@gmail.com','weM8dnAg0w','no 9jeeva street east extent mutharaiyarpalayam','$2b$05$0Zwh.VZdz/VdkFcjtjd7k.Aq0kUOSsVWW2NEnmcbb8F7z73687t0y','1751385336403-profile.avif','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 15:55:36','2025-07-01 15:55:36','222222222222',NULL,NULL,NULL,NULL),(32,'karthi@gmail.com','08428961489','karthi@gmail.com','Pm51gmkwfS','no 9jeeva street east extent mutharaiyarpalayam','$2b$05$RIvJvfqgrJXMvlyB5mKWYO9LuGonMGSPbG2PY6UMWHhCWLpJsBnDm','1751391885267-profile.avif','C:\\Users\\NINJA\\Documents\\RentalWebApplication College\\Backend\\src\\uploads',0x00,'2025-07-01 17:44:45','2025-07-01 17:44:45','212121212121',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `shop_owner_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `sub_catagories_tbl` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_catagories_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `superadmin_tbl` DISABLE KEYS */;
INSERT INTO `superadmin_tbl` VALUES ('2PG8Db6IGV','Selva','admwin@gmail.com','$2b$05$883n8ozaUnQ/IczYtxoIHutd.y3MOaoP8iUzCVNAGaWklCTPFY3Ui',3,0x00,30,0x01,'2025-07-01 08:44:43',NULL,'2025-07-01 09:03:19',NULL,'2025-07-01 09:03:19','Yw9mFhz7DZ'),('G3rxp848ph','THAMIZH SELVAM','donselva27@gmail.com','$2b$05$enFZWGthwJeUN0i88TtL2OARzFCKlN98gOHV7MBtvsdm2NV3uq4w2',3,0x00,29,0x00,'2025-05-15 10:54:07',NULL,'2025-05-15 10:54:07',NULL,NULL,NULL),('vdHFTEfZxn','Sabitha ','sabikathir29@gmail.com','$2b$05$YWkiHRuUPlTR6Ne1JUzUbuKJxnzZ8EgmpD4L1qR/GzuQ9JdfIfIOO',3,0x00,29,0x01,'2025-05-17 08:41:09',NULL,'2025-07-01 09:06:13',NULL,'2025-07-01 09:06:13','Yw9mFhz7DZ'),('yOkuHPqHOo','Bala','hellgod0612@gmail.com','$2b$05$TKBgUNCCOWI0RiqJSkbOGuxLDAkqt5WQAps5uIOAS9uVS9GDA1iqa',3,0x00,29,0x00,'2025-07-01 16:58:36',NULL,'2025-07-01 16:58:36',NULL,NULL,NULL),('Yw9mFhz7DZ','Admin','admin@gmail.com','$2b$05$oL/bq4qCDIKFv8dpwyX4yOnLmfo2XBF.YR2Sk4dTWsnhRyZ.sfrwe',3,0x00,NULL,0x00,'2025-05-12 09:58:52',NULL,'2025-05-12 09:58:52',NULL,NULL,NULL);
/*!40000 ALTER TABLE `superadmin_tbl` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transmission_tbl`
--

/*!40000 ALTER TABLE `transmission_tbl` DISABLE KEYS */;
INSERT INTO `transmission_tbl` VALUES (5,'Manual','2025-05-13 09:23:28','Yw9mFhz7DZ',0x00,'2025-05-13 09:23:28',NULL,NULL,NULL),(6,'Automatic','2025-05-13 09:23:34','Yw9mFhz7DZ',0x00,'2025-05-13 09:23:34',NULL,NULL,NULL),(7,'Selvass','2025-07-01 09:20:16','Yw9mFhz7DZ',0x01,'2025-07-01 09:20:16',NULL,'2025-07-01 09:30:54','Yw9mFhz7DZ'),(8,'qqqq','2025-07-01 09:20:50','Yw9mFhz7DZ',0x01,'2025-07-01 09:20:50',NULL,'2025-07-01 09:30:46','Yw9mFhz7DZ'),(9,'qqq','2025-07-01 09:20:57','Yw9mFhz7DZ',0x01,'2025-07-01 09:20:57',NULL,'2025-07-01 09:30:48','Yw9mFhz7DZ'),(10,'wwwwwwwwwww','2025-07-01 09:21:02','Yw9mFhz7DZ',0x01,'2025-07-01 09:21:02',NULL,'2025-07-01 09:30:50','Yw9mFhz7DZ');
/*!40000 ALTER TABLE `transmission_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('L9bYLidBlK','Karthi','karthi@gmail.com','9585758548','$2b$05$krKZmn5HQlBCYNCt0nsKneKB83hXw0AbQnhREQtWpVKmEGi8LBTnq','no 9jeeva street east extent mutharaiyarpalayam','puducherry','Puducherry','1748187490712-AIM_YT__1_.png','/opt/render/project/src/Backend/src',0x00,'2025-05-25 15:38:12',NULL,'2025-05-25 15:38:12','65009',NULL,NULL,NULL),('u1AbCdeX01','Raj Kumar','raj1@example.com','9876543210','password_hash1','123 MG Road','Pondicherry','Puducherry','Aadhar','/docs/aadhar1.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605001',NULL,NULL,NULL),('u1AbCdeX02','Priya Sharma','priya2@example.com','9876543211','password_hash2','234 Beach Road','Pondicherry','Puducherry','Voter ID','/docs/voter2.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605002',NULL,NULL,NULL),('u1AbCdeX03','Arun Das','arun3@example.com','9876543212','password_hash3','345 Bazaar St','Pondicherry','Puducherry','Driving License','/docs/dl3.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605003',NULL,NULL,NULL),('u1AbCdeX04','Meena Iyer','meena4@example.com','9876543213','password_hash4','456 Temple Rd','Pondicherry','Puducherry','Aadhar','/docs/aadhar4.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605004',NULL,NULL,NULL),('u1AbCdeX05','Sunil Jain','sunil5@example.com','9876543214','password_hash5','567 Market St','Pondicherry','Puducherry','PAN Card','/docs/pan5.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605005',NULL,NULL,NULL),('u1AbCdeX06','Kavya Menon','kavya6@example.com','9876543215','password_hash6','678 College Rd','Pondicherry','Puducherry','Passport','/docs/passport6.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605006',NULL,NULL,NULL),('u1AbCdeX07','Vikram Rao','vikram7@example.com','9876543216','password_hash7','789 Hospital Rd','Pondicherry','Puducherry','Aadhar','/docs/aadhar7.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605007',NULL,NULL,NULL),('u1AbCdeX08','Anjali Sinha','anjali8@example.com','9876543217','password_hash8','890 Library Rd','Pondicherry','Puducherry','Voter ID','/docs/voter8.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605008',NULL,NULL,NULL),('u1AbCdeX09','Deepak Verma','deepak9@example.com','9876543218','password_hash9','901 Marina Rd','Pondicherry','Puducherry','Driving License','/docs/dl9.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605009',NULL,NULL,NULL),('u1AbCdeX10','Neha Roy','neha10@example.com','9876543219','password_hash10','012 College Rd','Pondicherry','Puducherry','PAN Card','/docs/pan10.jpg',0x00,'2025-06-05 17:09:16',NULL,'2025-06-05 17:09:16','605010',NULL,NULL,NULL),('VHW59TMGBX','Selva','thamizhselvam8428@gmail.com','8428961472','$2b$05$JuM/lSU4F.0vavEj.7yfteiFcoDl3sNyS9qPlDF2dH4ANmA7Oe0Qq','no 9jeeva street east extent mutharaiyarpalayam','puducherry','Puducherry','1747638272316-404-page_not_found.png','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src',0x00,'2025-05-19 07:04:32',NULL,'2025-05-19 07:04:32','65009',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_image_tbl`
--

/*!40000 ALTER TABLE `vehicle_image_tbl` DISABLE KEYS */;
INSERT INTO `vehicle_image_tbl` VALUES (54,'1747976516000-bonnet.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(55,'1747976516004-civic-exterior-car-roof.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(56,'1747976516005-civic-interior-front-row-seats.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(57,'1747976516006-civic-interior-horn-boss.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(58,'1747976516006-Honda-Civic-Exterior-164242.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','UNXqy7JH2J',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-05-23 05:01:56',NULL,NULL,NULL),(59,'1747981817624-bonnet.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',0x00,'2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(60,'1747981817624-civic-exterior-car-roof.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',0x00,'2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(61,'1747981817625-civic-interior-front-row-seats.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',0x00,'2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(62,'1747981817625-civic-interior-horn-boss.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',0x00,'2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(63,'1747981817625-mainimage.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','ypdG5q4cSr',0x00,'2025-05-23 06:30:17','VsA46zQqyF','2025-05-23 06:30:17',NULL,NULL,NULL),(64,'1748253327977-exterior_audi-a6_front-view_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Zv9CC4 EuR',0x00,'2025-05-26 09:55:27','KGdpyt8uRr','2025-05-26 09:55:27',NULL,NULL,NULL),(65,'1748253327978-exterior_audi-a6_rear-left-view_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Zv9CC4 EuR',0x00,'2025-05-26 09:55:27','KGdpyt8uRr','2025-05-26 09:55:27',NULL,NULL,NULL),(66,'1748253327978-exterior_audi-a6_right-side-view_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Zv9CC4 EuR',0x00,'2025-05-26 09:55:27','KGdpyt8uRr','2025-05-26 09:55:27',NULL,NULL,NULL),(67,'1748253327979-interior_audi-a6_dashboard_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Zv9CC4 EuR',0x00,'2025-05-26 09:55:27','KGdpyt8uRr','2025-05-26 09:55:27',NULL,NULL,NULL),(68,'1748253327979-interior_audi-a6_interior-image_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Zv9CC4 EuR',0x00,'2025-05-26 09:55:27','KGdpyt8uRr','2025-05-26 09:55:27',NULL,NULL,NULL),(69,'1748253646823-exterior_audi-etron_front-left-side_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','8ZVk4BkMuT',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-05-26 10:00:46',NULL,NULL,NULL),(70,'1748253646824-exterior_audi-etron_rear-view_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','8ZVk4BkMuT',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-05-26 10:00:46',NULL,NULL,NULL),(71,'1748253646824-interior_audi-etron_pedals_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','8ZVk4BkMuT',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-05-26 10:00:46',NULL,NULL,NULL),(72,'1748253646824-interior_audi-etron_rear-seats_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','8ZVk4BkMuT',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-05-26 10:00:46',NULL,NULL,NULL),(73,'1748253646824-interior_audi-etron_steering-wheel_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','8ZVk4BkMuT',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-05-26 10:00:46',NULL,NULL,NULL),(74,'1748253947848-bmw-7-series-i7-cp-design-interior-desktop.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','nXgm7BX2hH',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-05-26 10:05:47',NULL,NULL,NULL),(75,'1748253947850-bmw-7-series-i7-gallery-image-design-03-1920.jpg.asset.1728377034443.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','nXgm7BX2hH',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-05-26 10:05:47',NULL,NULL,NULL),(76,'1748253947854-bmw-7-series-i7-gallery-image-innovation-03-890.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','nXgm7BX2hH',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-05-26 10:05:47',NULL,NULL,NULL),(77,'1748253947854-BMW-i7-15.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','nXgm7BX2hH',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-05-26 10:05:47',NULL,NULL,NULL),(78,'1748253947855-BMW-MY25-i7-Overview-Tech-Carousel-04-V2.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','nXgm7BX2hH',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-05-26 10:05:47',NULL,NULL,NULL),(79,'1748254366016-celerio-3.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','PxYiPlLXf8',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-05-26 10:12:46',NULL,NULL,NULL),(80,'1748254366016-dashboard-59.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','PxYiPlLXf8',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-05-26 10:12:46',NULL,NULL,NULL),(81,'1748254366016-Interior_web_02.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','PxYiPlLXf8',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-05-26 10:12:46',NULL,NULL,NULL),(82,'1748254366017-Interior_web_03-new.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','PxYiPlLXf8',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-05-26 10:12:46',NULL,NULL,NULL),(83,'1748254366019-suzuki-celerio-front-angle-low-view-895463.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','PxYiPlLXf8',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-05-26 10:12:46',NULL,NULL,NULL),(84,'1748255070190-classic-650672c3f71998fc.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','BxWPqL8xur',0x00,'2025-05-26 10:24:30','KGdpyt8uRr','2025-05-26 10:24:30',NULL,NULL,NULL),(85,'1748255070191-classic-650672c3f7581384.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','BxWPqL8xur',0x00,'2025-05-26 10:24:30','KGdpyt8uRr','2025-05-26 10:24:30',NULL,NULL,NULL),(86,'1748255070191-classic-650672c3fbda9740.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','BxWPqL8xur',0x00,'2025-05-26 10:24:30','KGdpyt8uRr','2025-05-26 10:24:30',NULL,NULL,NULL),(87,'1748255070192-classic-650672c3fbf10698.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','BxWPqL8xur',0x00,'2025-05-26 10:24:30','KGdpyt8uRr','2025-05-26 10:24:30',NULL,NULL,NULL),(88,'1748255070192-classic-650672c3fda4240b.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','BxWPqL8xur',0x00,'2025-05-26 10:24:30','KGdpyt8uRr','2025-05-26 10:24:30',NULL,NULL,NULL),(89,'1748256167883-exterior_bajaj-pulsarns200_front-view_1000x700.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','AHE2naSl8m',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-05-26 10:42:47',NULL,NULL,NULL),(90,'1748256167884-exterior_bajaj-pulsarns200_number-plate-view_600x400.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','AHE2naSl8m',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-05-26 10:42:47',NULL,NULL,NULL),(91,'1748256167884-exterior_bajaj-pulsarns200_rear-left-view_1000x700.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','AHE2naSl8m',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-05-26 10:42:47',NULL,NULL,NULL),(92,'1748256167885-exterior_bajaj-pulsarns200_speedometer-view_600x400.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','AHE2naSl8m',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-05-26 10:42:47',NULL,NULL,NULL),(93,'1748256167885-exterior_bajaj-pulsarns200_suspension-view_600x400.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','AHE2naSl8m',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-05-26 10:42:47',NULL,NULL,NULL),(94,'1748256533644-dashboard-20230706122151.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','4SL3tfJLBW',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-05-26 10:48:53',NULL,NULL,NULL),(95,'1748256533644-eeco-exterior-right-rear-three-quarter.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','4SL3tfJLBW',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-05-26 10:48:53',NULL,NULL,NULL),(96,'1748256533644-maruti-eeco-interior-design-1736849359.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','4SL3tfJLBW',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-05-26 10:48:53',NULL,NULL,NULL),(97,'1748256533645-maruti_suzuki_eeco_bootspace.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','4SL3tfJLBW',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-05-26 10:48:53',NULL,NULL,NULL),(98,'1748256533645-Spacious_cabin.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','4SL3tfJLBW',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-05-26 10:48:53',NULL,NULL,NULL),(99,'1748257033856-exterior_audi-q5_rear-left-view_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','oN70H673i1',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-05-26 10:57:13',NULL,NULL,NULL),(100,'1748257033856-interior_audi-q5_dashboard_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','oN70H673i1',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-05-26 10:57:13',NULL,NULL,NULL),(101,'1748257033856-interior_audi-q5_door-view-of-driver-seat_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','oN70H673i1',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-05-26 10:57:13',NULL,NULL,NULL),(102,'1748257033856-interior_audi-q5_gear-shifter_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','oN70H673i1',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-05-26 10:57:13',NULL,NULL,NULL),(103,'1748257033857-interior_audi-q5_steering-wheel_930x620.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','oN70H673i1',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-05-26 10:57:13',NULL,NULL,NULL),(104,'1748257284300-405060.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','lWV2opW7KD',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-05-26 11:01:24',NULL,NULL,NULL),(105,'1748257284301-P90403630_highRes_bmw-m4-competition-x-1.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','lWV2opW7KD',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-05-26 11:01:24',NULL,NULL,NULL),(106,'1748257284302-P90414928_highRes_bmw-m4-competition-c-scaled.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','lWV2opW7KD',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-05-26 11:01:24',NULL,NULL,NULL),(107,'1748257284304-P90444649_highRes.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','lWV2opW7KD',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-05-26 11:01:24',NULL,NULL,NULL),(108,'1748257284309-The-new-BMW-M4-Coupe-in-the-US-17.jpg','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','lWV2opW7KD',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-05-26 11:01:24',NULL,NULL,NULL),(109,'1748258508722-2021-390-duke67d19c0e64603.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','rCy1tUCfxp',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-05-26 11:21:48',NULL,NULL,NULL),(110,'1748258508723-2021-390-duke67d19c0f7589c.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','rCy1tUCfxp',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-05-26 11:21:48',NULL,NULL,NULL),(111,'1748258508723-2021-390-duke67d19c14b6e13.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','rCy1tUCfxp',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-05-26 11:21:48',NULL,NULL,NULL),(112,'1748258508723-2021-390-duke67d19c108d54b.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','rCy1tUCfxp',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-05-26 11:21:48',NULL,NULL,NULL),(113,'1748258508723-2021-390-duke67d19c1009546.avif','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','rCy1tUCfxp',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-05-26 11:21:48',NULL,NULL,NULL),(114,'1748259817351-gallery_1.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Kl1mSK9RZk',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-05-26 11:43:37',NULL,NULL,NULL),(115,'1748259817351-gallery_2.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Kl1mSK9RZk',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-05-26 11:43:37',NULL,NULL,NULL),(116,'1748259817352-gallery_3.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Kl1mSK9RZk',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-05-26 11:43:37',NULL,NULL,NULL),(117,'1748259817353-new_slider_vxl_2.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Kl1mSK9RZk',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-05-26 11:43:37',NULL,NULL,NULL),(118,'1748259817353-slider_vxl2.webp','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','Kl1mSK9RZk',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-05-26 11:43:37',NULL,NULL,NULL),(119,'1749046590908-404-page_not_found.png','/home/ninja/Downloads/Demo ui/RentalWebApplication copy 23.may.1pm/Backend/src/uploads','J6DELZd6YV',0x00,'2025-06-04 14:16:31','KGdpyt8uRr','2025-06-04 14:16:31',NULL,NULL,NULL),(120,'1749046590918-Abstract_-_Nature.jpg','/home/ninja/Downloads/Demo ui/RentalWebApplication copy 23.may.1pm/Backend/src/uploads','J6DELZd6YV',0x00,'2025-06-04 14:16:31','KGdpyt8uRr','2025-06-04 14:16:31',NULL,NULL,NULL),(121,'1749046590923-Anime-City-Night.png','/home/ninja/Downloads/Demo ui/RentalWebApplication copy 23.may.1pm/Backend/src/uploads','J6DELZd6YV',0x00,'2025-06-04 14:16:31','KGdpyt8uRr','2025-06-04 14:16:31',NULL,NULL,NULL),(122,'1749046590991-Anime-Girl1.png','/home/ninja/Downloads/Demo ui/RentalWebApplication copy 23.may.1pm/Backend/src/uploads','J6DELZd6YV',0x00,'2025-06-04 14:16:31','KGdpyt8uRr','2025-06-04 14:16:31',NULL,NULL,NULL),(123,'1749046591001-Anime-Girl2.png','/home/ninja/Downloads/Demo ui/RentalWebApplication copy 23.may.1pm/Backend/src/uploads','J6DELZd6YV',0x00,'2025-06-04 14:16:31','KGdpyt8uRr','2025-06-04 14:16:31',NULL,NULL,NULL);
/*!40000 ALTER TABLE `vehicle_image_tbl` ENABLE KEYS */;

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
  `Area_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `registration_no` (`registration_no`),
  KEY `category_id` (`category_id`),
  KEY `rentalShop_id` (`rentalShop_id`),
  KEY `vehicle_tbl_ibfk_3` (`brand_id`),
  KEY `vehicle_tbl_ibfk_4` (`fuel_id`),
  KEY `vehicle_tbl_ibfk_5` (`transmission_id`),
  KEY `vehicle_tbl_ibfk_6` (`Area_id`),
  CONSTRAINT `vehicle_tbl_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_2` FOREIGN KEY (`rentalShop_id`) REFERENCES `rental_shop_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_3` FOREIGN KEY (`brand_id`) REFERENCES `brand_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_4` FOREIGN KEY (`fuel_id`) REFERENCES `fuel_type_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_5` FOREIGN KEY (`transmission_id`) REFERENCES `transmission_tbl` (`id`),
  CONSTRAINT `vehicle_tbl_ibfk_6` FOREIGN KEY (`Area_id`) REFERENCES `area_tbl` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_tbl`
--

/*!40000 ALTER TABLE `vehicle_tbl` DISABLE KEYS */;
INSERT INTO `vehicle_tbl` VALUES ('4SL3tfJLBW','Maruthi Eco','2018','blue','PY 01 05 8543',NULL,3,'KGdpyt8uRr',0x00,'2025-05-26 10:48:53','KGdpyt8uRr','2025-06-23 07:17:11',NULL,NULL,NULL,23,45,5,5000.00,'7','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748256533643-maruti-suzuki-eeco.jpg','The Maruti Eeco is a practical and spacious van with a 1.2L petrol engine, ideal for families and businesses. It offers flexible seating (5 or 7 seats), good mileage, and reliable performance at an affordable price.',5),('8ZVk4BkMuT','Audi Etron','2025','blue','PY 01 05 0943',NULL,1,'KGdpyt8uRr',0x00,'2025-05-26 10:00:46','KGdpyt8uRr','2025-06-23 07:17:11',NULL,NULL,NULL,11,45,5,5000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748253646823-exterior_audi-etron_front-left-side_930x620.webp','The Audi e-tron is a fully electric luxury SUV combining performance, advanced technology, and zero-emission driving. It offers a spacious interior, quattro all-wheel drive, and a smooth, quiet ride with premium features throughout.',5),('AHE2naSl8m','NS200','2020','Red','PY 01 05 8811',NULL,2,'KGdpyt8uRr',0x00,'2025-05-26 10:42:47','KGdpyt8uRr','2025-06-04 14:17:51',NULL,NULL,NULL,22,44,5,5000.00,'2','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748256167883-exterior_bajaj-pulsarns200_front-right-view_1000x700.webp','The Bajaj Pulsar NS200 is a sporty 199.5cc bike with a liquid-cooled engine, 6-speed gearbox, sharp styling, perimeter frame, and monoshock suspension. It offers strong performance, good handling, and aggressive streetfighter looks.',5),('Kl1mSK9RZk','Vespa','2024','blue','PY 01 05 0432',NULL,2,'xclBp7F1ln',0x00,'2025-05-26 11:43:37','xclBp7F1ln','2025-06-23 07:17:11',NULL,NULL,NULL,22,44,5,5000.00,'2','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748259817350-slider_vxl2.webp','The Vespa is a premium scooter with a classic Italian design, smooth engine performance, and sturdy metal body. It combines style, comfort, and reliability, making it ideal for city commuting and daily rides.',9),('lWV2opW7KD','BMW M4','2021','green','PY 01 05 6646',NULL,1,'xclBp7F1ln',0x00,'2025-05-26 11:01:24','xclBp7F1ln','2025-06-23 07:17:11',NULL,NULL,NULL,6,44,6,5000.00,'6','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748257284298-BMW_M4_001_ut2z6l.avif','The BMW M5 is a high-performance luxury sedan powered by a 4.4L V8 twin-turbo engine. It delivers thrilling speed, precise handling, and premium comfort, combining track-ready dynamics with everyday practicality and advanced tech.',9),('nXgm7BX2hH','BMW i7','2025','White','PY 01 05 1021',NULL,1,'KGdpyt8uRr',0x00,'2025-05-26 10:05:47','KGdpyt8uRr','2025-06-23 07:17:11',NULL,NULL,NULL,6,44,6,5000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748253947847-front-view-118.avif','The BMW i7 is a fully electric luxury sedan that blends cutting-edge technology with exceptional comfort and performance. Featuring a bold design, advanced driver assistance, and a quiet, powerful ride, it defines premium electric mobility.',5),('oN70H673i1','AUDI Q5','2022','black','PY 01 05 7777',NULL,1,'xclBp7F1ln',0x00,'2025-05-26 10:57:13','xclBp7F1ln','2025-07-01 17:15:17','xclBp7F1ln',NULL,NULL,11,46,6,5000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748257033856-exterior_audi-q5_front-left-side_930x620.webp','The Audi Q5 is a premium mid-size SUV offering a refined 2.0L TFSI engine, Quattro AWD, luxurious interiors, advanced tech, and smooth performance. It balances comfort, style, and sporty driving dynamics with modern safety features.',9),('PxYiPlLXf8','CLERIO','2020','blue','PY 01 05 9865',NULL,1,'KGdpyt8uRr',0x00,'2025-05-26 10:12:46','KGdpyt8uRr','2025-06-23 07:17:11',NULL,NULL,NULL,23,45,5,5000.00,'5','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748254366016-suzuki-celerio-front-angle-low-view-895463.avif','The Maruti Celerio is a compact hatchback known for its fuel efficiency, easy handling, and practical design. Ideal for city driving, it offers a spacious cabin, smart features, and a reliable performance at an affordable price.',5),('rCy1tUCfxp','KTM DUKE 390','2024','orange','PY 01 05 0041',NULL,2,'xclBp7F1ln',0x00,'2025-05-26 11:21:48','xclBp7F1ln','2025-07-01 17:13:45','xclBp7F1ln',NULL,NULL,22,44,5,5000.00,'2','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1748258508722-2021-390-duke67d19c0d0c17b.avif','The KTM Duke 390 is a lightweight, high-performance street bike with a 373cc engine, sharp handling, aggressive design, and advanced features like ride-by-wire, TFT display, and ABS—ideal for spirited urban and highway rides.',9),('UNXqy7JH2J','Civic','2021','Redssss','PY 01 05 8343',NULL,1,'xclBp7F1ln',0x00,'2025-05-22 20:45:12','xclBp7F1ln','2025-06-04 14:19:13','xclBp7F1ln',NULL,NULL,2,45,6,2000.00,'4','/home/ninja/Documents/Projects - REntal Applications/Rent_a_Vehicle_2/Rent_a_Vehicle/Rental Web Application/Backend/src/uploads','1747980282104-mainimage.webp','Good Car',9);
/*!40000 ALTER TABLE `vehicle_tbl` ENABLE KEYS */;

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

/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;

--
-- Dumping routines for database 'rental_clg_database'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-26 17:46:32
