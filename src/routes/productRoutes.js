'use strict';

import {
    Router
} from 'express';
import productController from '../controllers/ProductController.js';
const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.put('/product/:id', productController.updateProductById);
router.post('/products', productController.addProduct);


export const routes = router;