import { Postres } from './models';
import { Postres as Rpostres} from './interfaces';
import { ulid } from 'ulid';


const list = async () => {
    return await Postres.find();
}

const getOne = async (id: string) => {
    return await Postres.findOne({ id });
}
const store = async (data: Rpostres) => {
    const id = ulid();

    const category = new Postres({ name: data.name, price: data.price, description: data.description, poromotion: data.promotion, producedBy: data.producedBy,  id });

    await category.save();

    return category;
}
const deleteItem = async (id : String) => {
    return await Postres.deleteOne({  id });

}

 const update = async (id: string, data:Rpostres)=>{
    const model = await Postres. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}