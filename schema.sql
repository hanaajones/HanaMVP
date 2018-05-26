DROP DATABASE IF EXISTS drone;

CREATE DATABASE drone;

USE drone;

CREATE TABLE places (
    id int(6) AUTO_INCREMENT,
    place varchar(20),
    PRIMARY KEY (ID),
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/