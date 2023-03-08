CREATE DATABASE bootcamp;
USE bootcamp;
CREATE TABLE students (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono INT UNSIGNED NOT NULL,
    DNI CHAR(20) NOT NULL,
    pais VARCHAR(50),
    CP INT UNSIGNED NOT NULL,
    direccion VARCHAR(100),
    ciudad VARCHAR(100)
);

CREATE TABLE addresses (
	direccion VARCHAR(200),
    ciudad VARCHAR(100),
    CP INT UNSIGNED NOT NULL,
    pais VARCHAR(50),
    id_student INT NOT NULL,
    FOREIGN KEY (id_student) REFERENCES students (id) ON DELETE CASCADE
);

ALTER TABLE students DROP COLUMN pais;
ALTER TABLE students DROP COLUMN CP;
ALTER TABLE students DROP COLUMN direccion;
ALTER TABLE students DROP COLUMN ciudad;


INSERT INTO students (id, nombre, apellidos, email, telefono, DNI)
VALUES (1, "Irvin", "Lethem", "ilethem0@google.com.au", 993870144, "27994841-9"),
(2, "Kylie", "Mungan", "kmungan1@howstuffworks.com.", 497494899, "748551874-7"),
(3, "Yul", "Dibbert", "ydibbert2@businesswire.com.", 776631050, "215649413-4"),
(4, "Tamara", "Mc Gorley", "tmcgorley@3studiospress.com", 921948685, "617064473-7"),
(5, "Elmira", "Imbrey", "eimbrey@cpanel.net", 304168000, "178988896-4");

INSERT INTO addresses (direccion, ciudad, CP, pais, id_student)
VALUES ("98339 Loftsgordon Road", "Babakanbandung", 83297, "Indonesia", 1),
("74641 Dwight Avenue", "Bilar", 44455, "Philippines", 2),
("9510 Milwaukee Street", "Sumberejo", 62925, "Indonesia", 3),
("8902 Doe Crossing Alley", "Steinkjer", 54756, "Norway", 4),
("8616 Stephen Hill", "Charleston", 51471, "United States", 5);

SELECT nombre, apellidos, telefono FROM students ORDER BY apellidos;
SELECT COUNT(id_student), pais FROM addresses GROUP BY pais;


