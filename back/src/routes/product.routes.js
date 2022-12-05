import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
const productRouter = Router()

productRouter.get('/', productController.get)
productRouter.post('/', productController.post)
productRouter.put('/:_id', productController.put)
productRouter.delete('/:_id', productController.delet)
productRouter.use('/api/products/', productRouter);
export { productRouter };