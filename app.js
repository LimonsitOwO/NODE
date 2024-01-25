import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import peliculaRoute from './routes/routes.js'

require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
app.use('/peliculas', peliculaRoute)

