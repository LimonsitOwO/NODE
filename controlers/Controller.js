import PeliculasData from "../models/Model.js";

export const getPeliculas = async (req, res) => {
    try {
        const allData = await PeliculasData.findAll();
        res.json(allData)
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const getPelicula = async (req, res) => {
    try {
        const someData = await PeliculasData.findAll({
            where:{id:req.params.id}
        });
        res.json(someData[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const addPelicula = async (req, res) => {
    try {
        await PeliculasData.create(req.body)
        res.json({
            "message":"Creado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const updatePelicula = async (req, res) => {
    try {
        PeliculasData.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
export const deletePelicula = async (req, res) => {
    try {
        PeliculasData.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message":"Borrado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}