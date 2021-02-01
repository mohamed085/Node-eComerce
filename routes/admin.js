const path = require('path');

const express = require('express');

const adminController = require('../controller/admin');
const isAuth = require('../middleware/is-auth');
const isAdmin = require('../middleware/is-admin');

const router = express.Router();

router.get('/products', isAuth, isAdmin, adminController.getProducts);

router.get('/add-product', isAuth, isAdmin, adminController.getAddProduct);
router.post('/add-product', isAuth, isAdmin, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, isAdmin, adminController.getEditProduct);
router.post('/edit-product', isAuth, isAdmin, adminController.postEditProduct);

router.post('/delete-product', isAuth, isAdmin, adminController.postDeleteProduct);

router.get('/orders', isAuth, isAdmin, adminController.getOrders);
router.post('/edit-order/:orderId', isAuth, isAdmin, adminController.postEditOrders);

module.exports = router;
