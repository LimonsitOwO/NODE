import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import router from './routes/routes.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())
app.use('/peliculas', router)

try {
    console.log("Conexion exitosa a la base de datos")
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

const port = process.env.PORT || 8000;

app.listen({port}, () => {
    console.log(`Escuchando por le puerto ${port}: http://localhost:${port}/peliculas/`);
})