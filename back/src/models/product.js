import mongoose from 'mongoose';
import { Schema } from 'mongoose';


const schemaProduct = new Schema({
    name: String,
    price: Number,
    img: String
}, {
    versionKey:false
}

);

export const ProductMoldel = mongoose.model('product', schemaProduct)