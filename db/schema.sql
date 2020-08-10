DROP DATABASE IF EXISTS burgers_db;
-- Create a database called programming_db --
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  burger_name VARCHAR(30),
  devoured BOOLEAN
);

INSERT INTO burgers(burger_name, devoured)
VALUES ("Chicken burger", 0), ("Quinoa Burger with Feta", 0), ("Beefy Burgers", 0), (" Pizza Burger", 0);