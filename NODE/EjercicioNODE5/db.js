"use strict";

const mysql = require("mysql2/promise");
require("dotenv").config();

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD } =
  process.env;
console.log(process.env);

let pool;

function getDB() {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 10,
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      timezone: "Z",
    });
  }
  // console.log(pool);
  return pool;
}

module.exports = getDB;
