import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
const productRouter = Router()

productRouter.get('/', productController.get)
productRouter.post('/', productController.post)
productRouter.put('/', productController.put)
productRouter.delete('/', productController.delet)
productRouter.use('/api/products/', productRouter);
export { productRouter };