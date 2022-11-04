import mongoose from "mongoose";

const libreriaSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    author: String,
    datePublication: String,
    chapters: String

});

export const Libreria = mongoose.model('Libreria', libreriaSchema);