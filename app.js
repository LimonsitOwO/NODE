import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import peliculaRoute from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/peliculas', peliculaRoute)

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`Error de conexion: ${error}`)
}

/*app.get('/', (req, res) => {
    res.send('Ola')
})*/

app.listen(8000, () => {
    console.log('Server UP Runing in http://localhost:8000/')
})