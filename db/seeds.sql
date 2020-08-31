DROP DATABASE IF EXISTS tips_db;
CREATE database tips_db;

USE tips_db;


/*User and Password Table for Login */

CREATE TABLE `users`
(
`id` int
(10) unsigned NOT NULL AUTO_INCREMENT,
`username` varchar
(255) DEFAULT NULL,
`password` varchar
(255) DEFAULT NULL,
PRIMARY KEY
(`id`),
UNIQUE KEY `username`
(`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/* Table for restaurant */
CREATE TABLE Restaurant
(
    restLocation varchar(30) NOT NULL,
    restName varchar(30) NOT NULL
);

/* Table for Server and Tip Amount */
CREATE TABLE `SERVER`
(
serverName varchar
(30) NOT NULL,
tipAmount decimal
(4,2) NOT NULL,
billAmount decimal
(5,2) NOT NULL
);

/* All Saved Information here */
CREATE TABLE Saved
(
    totalAmount decimal(5,2) NOT NULL
);