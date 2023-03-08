'use strict';
const getDB = require('./db.js');

//Escribe a partir de aquí el código solicitado

const initDb = async () => {
    try {
      const pool = getDB();

      console.log("Creating database...")
      
      await pool.query(`
          CREATE DATABASE IF NOT EXISTS web;
      `);

      await pool.query(`
          USE web;
      `);
  
      console.log("Creating users table...");
  
      await pool.query(`
          CREATE TABLE users (
              id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              email VARCHAR(100) UNIQUE NOT NULL,
              name VARCHAR(50),
              registration_date DATE NOT NULL,
              active BOOLEAN DEFAULT FALSE
          );
      `);
  
      console.log("Creating photos table...");
  
      await pool.query(`
          CREATE TABLE photos (
              id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
              user_id INT UNSIGNED NOT NULL,
              photo_file_name VARCHAR(255),
              creation_date DATE NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users (id)
          );
      `);
  
      console.log("Creating likes table...");
  
      await pool.query(`
          CREATE TABLE post_images (
              id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
              user_id INT UNSIGNED NOT NULL,
              photo_id INT UNSIGNED NOT NULL,
              creation_date DATE NOT NULL,
              FOREIGN KEY (user_id) REFERENCES users (id),
              FOREIGN KEY (photo_id) REFERENCES photos (id)
          );
      `);
  
      console.log("¡All done! 🚀");
    } catch (error) {
      console.error(error.message);
    } finally {
      process.exit();
    }
  };
  
  initDb();

