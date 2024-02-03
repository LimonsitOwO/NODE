import express from 'express';
import cors from 'cors';
import pool from './database/db.js';
import router from './routes/routes.js'

/*require('dotenv').config()*/
const app = express()

app.use(cors())
app.use(express.json())
app.use('/peliculas', router)

try {
    console.log("Conexion exitosa a la base de datos")
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

const port = 8000;

app.listen({port}, () => {
    console.log(`Escuchando por le puerto ${port}: http://localhost:${port}/peliculas/`);
})