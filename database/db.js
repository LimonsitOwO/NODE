import { Sequelize } from "sequelize";
const db = new Sequelize('WS_FINAL', 'postgres', '',{host:'localhost', dialect:'postgres'})

export default db;