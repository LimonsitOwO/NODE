/*
import { Sequelize } from "sequelize";
const db = new Sequelize('peliculas', 'postgres', '',{host:'localhost', dialect:'postgres'})

export default db;
*/
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


console.log('POSTGRES_URL:', process.env.POSTGRES_URL);

const db = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  ssl: true,
});

export default db;