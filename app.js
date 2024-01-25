import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import peliculaRoute from './routes/routes.js'

const app = express()

const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use('/peliculas', peliculaRoute)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}