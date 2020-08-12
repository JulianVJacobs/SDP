-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sdp
-- ------------------------------------------------------
-- Server version	8.0.21

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
-- Table structure for table `convocation`
--

DROP TABLE IF EXISTS `convocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `convocation` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `convocation`
--

LOCK TABLES `convocation` WRITE;
/*!40000 ALTER TABLE `convocation` DISABLE KEYS */;
INSERT INTO `convocation` VALUES (123456,'2020-08-10','1');
/*!40000 ALTER TABLE `convocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ernestoppenheimer`
--

DROP TABLE IF EXISTS `ernestoppenheimer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ernestoppenheimer` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ernestoppenheimer`
--

LOCK TABLES `ernestoppenheimer` WRITE;
/*!40000 ALTER TABLE `ernestoppenheimer` DISABLE KEYS */;
INSERT INTO `ernestoppenheimer` VALUES (123456,'2020-08-10','1'),(568410,'2020-08-09','chips'),(648005,'2020-08-09','chips');
/*!40000 ALTER TABLE `ernestoppenheimer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `highfield`
--

DROP TABLE IF EXISTS `highfield`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `highfield` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `highfield`
--

LOCK TABLES `highfield` WRITE;
/*!40000 ALTER TABLE `highfield` DISABLE KEYS */;
INSERT INTO `highfield` VALUES (123456,'2020-08-10','chips');
/*!40000 ALTER TABLE `highfield` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jubilee`
--

DROP TABLE IF EXISTS `jubilee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jubilee` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jubilee`
--

LOCK TABLES `jubilee` WRITE;
/*!40000 ALTER TABLE `jubilee` DISABLE KEYS */;
INSERT INTO `jubilee` VALUES (123456,'2020-08-10','1');
/*!40000 ALTER TABLE `jubilee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knockando`
--

DROP TABLE IF EXISTS `knockando`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knockando` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knockando`
--

LOCK TABLES `knockando` WRITE;
/*!40000 ALTER TABLE `knockando` DISABLE KEYS */;
INSERT INTO `knockando` VALUES (123456,'2020-08-10','1');
/*!40000 ALTER TABLE `knockando` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `main`
--

DROP TABLE IF EXISTS `main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `main`
--

LOCK TABLES `main` WRITE;
/*!40000 ALTER TABLE `main` DISABLE KEYS */;
INSERT INTO `main` VALUES (123456,'2020-08-10','1');
/*!40000 ALTER TABLE `main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owners`
--

DROP TABLE IF EXISTS `owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owners` (
  `Staff_No` int NOT NULL,
  `Password` varchar(35) NOT NULL,
  `First_Name` char(30) NOT NULL,
  `Last_Name` char(30) DEFAULT NULL,
  `Phone_No` int DEFAULT NULL,
  `order_size` int DEFAULT NULL,
  `DH_Name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Staff_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owners`
--

LOCK TABLES `owners` WRITE;
/*!40000 ALTER TABLE `owners` DISABLE KEYS */;
INSERT INTO `owners` VALUES (138931,'9548jklop','Philip','Lubbe',837101690,0,'Convocation'),(164589,'12345uyrr','John','Smith',768915478,0,'ErnestOppenheimer'),(530478,'6789cfgcg','Rebecca','Muller',852738815,0,'Highfield'),(666693,'987654321','Veronica','Ngathi',823455677,0,'Jubilee'),(691525,'543216789','Busisiwe','Muller',837101640,0,'Knockando'),(6883998,'123456789','Gavin','Zulu',832630015,0,'Main');
/*!40000 ALTER TABLE `owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Stu_No` int NOT NULL,
  `Password` varchar(35) NOT NULL,
  `First_Name` char(30) NOT NULL,
  `Last_Name` char(30) DEFAULT NULL,
  `Phone_No` int DEFAULT NULL,
  `food_order` varchar(255) DEFAULT NULL,
  `Amount_left` int DEFAULT NULL,
  PRIMARY KEY (`Stu_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (123456,'123456','Holly','Wood',NULL,NULL,NULL),(568410,'kabzfromrome','Karabo','Dlamini',NULL,NULL,NULL),(648005,'unhashedpassword','Vladamir','Trump',NULL,NULL,NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `person_number` varchar(10) NOT NULL,
  `password` varchar(45) NOT NULL,
  `position` int DEFAULT '0',
  PRIMARY KEY (`person_number`),
  UNIQUE KEY `person_number_UNIQUE` (`person_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('123456','123456',0),('138931','9548jklop',1),('164589','12345uyrr',1),('530478','6789cfgcg',1),('568410','kabzfromrome',0),('648005','unhashedpassword',0),('666693','987654321',1),('6883998','123456789',1),('691525','543216789',1);
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

-- Dump completed on 2020-08-10 19:10:11
