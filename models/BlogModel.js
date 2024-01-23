import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PeliculasData = db.define('peliculas', {
    url: { type: DataTypes.STRING },
    nombrep: { type: DataTypes.STRING },
    sinopsis: { type: DataTypes.STRING },
    plataforma: { type: DataTypes.STRING },
}, {
    timestamps: false,
});

export default PeliculasData;
