/*
import { Sequelize } from "sequelize";
const db = new Sequelize('peliculas', 'postgres', '',{host:'localhost', dialect:'postgres'})

export default db;
*/
import { Sequelize } from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

const db = new Sequelize({
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

export default db;