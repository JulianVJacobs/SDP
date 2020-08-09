-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: SDP
-- ------------------------------------------------------
-- Server version	8.0.21-0ubuntu0.20.04.3

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
-- Table structure for table `Convocation`
--

DROP TABLE IF EXISTS `Convocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Convocation` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Convocation`
--

LOCK TABLES `Convocation` WRITE;
/*!40000 ALTER TABLE `Convocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `Convocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ErnestOppenheimer`
--

DROP TABLE IF EXISTS `ErnestOppenheimer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ErnestOppenheimer` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ErnestOppenheimer`
--

LOCK TABLES `ErnestOppenheimer` WRITE;
/*!40000 ALTER TABLE `ErnestOppenheimer` DISABLE KEYS */;
/*!40000 ALTER TABLE `ErnestOppenheimer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Highfield`
--

DROP TABLE IF EXISTS `Highfield`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Highfield` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Highfield`
--

LOCK TABLES `Highfield` WRITE;
/*!40000 ALTER TABLE `Highfield` DISABLE KEYS */;
/*!40000 ALTER TABLE `Highfield` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Jubilee`
--

DROP TABLE IF EXISTS `Jubilee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Jubilee` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Jubilee`
--

LOCK TABLES `Jubilee` WRITE;
/*!40000 ALTER TABLE `Jubilee` DISABLE KEYS */;
/*!40000 ALTER TABLE `Jubilee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Knockando`
--

DROP TABLE IF EXISTS `Knockando`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Knockando` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Knockando`
--

LOCK TABLES `Knockando` WRITE;
/*!40000 ALTER TABLE `Knockando` DISABLE KEYS */;
/*!40000 ALTER TABLE `Knockando` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Main`
--

DROP TABLE IF EXISTS `Main`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Main` (
  `Ordered_by` int NOT NULL,
  `Date` date NOT NULL,
  `Food_order` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Ordered_by`,`Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Main`
--

LOCK TABLES `Main` WRITE;
/*!40000 ALTER TABLE `Main` DISABLE KEYS */;
/*!40000 ALTER TABLE `Main` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Owners`
--

DROP TABLE IF EXISTS `Owners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Owners` (
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
-- Dumping data for table `Owners`
--

LOCK TABLES `Owners` WRITE;
/*!40000 ALTER TABLE `Owners` DISABLE KEYS */;
INSERT INTO `Owners` VALUES (138931,'9548jklop','Philip','Lubbe',837101690,0,'Convocation'),(164589,'12345uyrr','John','Smith',768915478,0,'Ernest Oppenheimer'),(530478,'6789cfgcg','Rebecca','Muller',852738815,0,'Highfield'),(666693,'987654321','Veronica','Ngathi',823455677,0,'Jubilee'),(691525,'543216789','Busisiwe','Muller',837101640,0,'Knockando'),(6883998,'123456789','Gavin','Zulu',832630015,0,'Main');
/*!40000 ALTER TABLE `Owners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Student`
--

DROP TABLE IF EXISTS `Student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Student` (
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
-- Dumping data for table `Student`
--

LOCK TABLES `Student` WRITE;
/*!40000 ALTER TABLE `Student` DISABLE KEYS */;
INSERT INTO `Student` VALUES (568410,'kabzfromrome','Karabo','Dlamini',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-09  2:06:01
