import mongoose from "mongoose";

const postresSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: String,
    description: String,
    promotion: String,
    producedBy: String

});

export const Postres = mongoose.model('Postres', postresSchema);