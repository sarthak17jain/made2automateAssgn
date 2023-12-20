import express from  'express';
import { modifyProduct, getProducts } from '../controller/product-controller.js';

const productRouter = express.Router();

productRouter.get('/allproducts', getProducts);
productRouter.post('/modify', modifyProduct);

export default productRouter;