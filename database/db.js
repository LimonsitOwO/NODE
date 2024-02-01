import { Sequelize } from "sequelize";
const db = new Sequelize('postgres', 'postgres', '',{host:'localhost', dialect:'postgres'})

export default db;

/*
import pg from 'pg';

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
export default db;*/