import { ProductMoldel } from '../models/product.js'
const get = async (_, res) => {
    const products = await ProductMoldel.find().lean()
    res.json(products)
};

const post = async (req, res) => {
    const { name, price, img } = req.body
    console.log(name);
    const product = await new ProductMoldel({name, price, img}).save()
    res.json(product);
};

const put = async (req, res) => {
    const {_id, name, price, img} = req.body
    const product = await ProductMoldel.findByIdAndUpdate(_id, {name, price, img}, {new:true})
    res.json(product);
};

const delet = async (req, res) => {
    console.log(req.body);
    const {_id} = req.body
    const product = await  ProductMoldel.findByIdAndDelete(_id)
    console.log(product);
    res.json(product);
};

export const productController = {
get, post, put, delet
}