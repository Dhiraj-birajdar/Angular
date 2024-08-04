-- Active: 1710342347852@@127.0.0.1@3306@product
SHOW DATABASES;

SHOW TABLES;

SELECT * FROM product LIMIT 5;

USE testworld;

DROP TABLE city;

-- Create the table
CREATE TABLE city (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    countryCode VARCHAR(255),
    district VARCHAR(255),
    population INT
);

INSERT INTO
    city (
        name,
        countryCode,
        district,
        population
    )
VALUES (
        'City1',
        'CountryCode1',
        'District1',
        10000
    ),
    (
        'City2',
        'CountryCode2',
        'District2',
        20000
    ),
    (
        'City100',
        'CountryCode100',
        'District100',
        100000
    );

SHOW TABLES;

SELECT * FROM testworld.city LIMIT 10;

INSERT INTO
    testworld.city (country_code)
SELECT countrycode
FROM world.city;

INSERT INTO city (country_code) VALUES ('AFG') WHERE id = 1;

DESC city;

SHOW INDEX FROM city;

CREATE SCHEMA testworld;

CREATE TABLE testworld.city LIKE world.city;

USE testworld;

SHOW TABLES;

DROP INDEX countrycode ON city;