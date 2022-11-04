import { Libreria } from './models';
import { Libreria as NLibreria} from './interfaces';
import { ulid } from 'ulid';


const list = async () => {
    return await Libreria.find();
}

const getOne = async (id: string) => {
    return await Libreria.findOne({ id });
}
const store = async (data: NLibreria) => {
    const id = ulid();

    const libreria = new Libreria({ name: data.name, description: data.description, datePublication: data.datePublication, author: data.author, chapters: data.chapters, id });

    await libreria.save();

    return libreria;
}
const deleteItem = async (id : String) => {
    return await Libreria.deleteOne({  id });

}

 const update = async (id: string, data:NLibreria)=>{
    const model = await Libreria. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}