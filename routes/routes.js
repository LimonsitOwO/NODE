import express from 'express';
import { addPelicula, deletePelicula, getPelicula, getPeliculas, updatePelicula } from '../controlers/Controller.js';

const router = express.Router();

router.get('/', getPeliculas)
router.get('/:id', getPelicula)
router.post('/', addPelicula)
router.put('/:id', updatePelicula)
router.delete('/:id', deletePelicula)

export default router