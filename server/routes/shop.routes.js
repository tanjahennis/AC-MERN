import { Router } from 'express';
import * as ShopController from '../controllers/shop.controller';

const router = new Router();

// Get all Products
router.route('/products').get(ShopController.getProducts);


export default router;
