import pg from 'pg';

const { Pool } = pg;

const db = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
export default db;