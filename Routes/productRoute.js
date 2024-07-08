const express = require('express');
const router = express.Router();
const productControllers = require('../Controllers/productController');

// Create Product
router.post('/api/products', productControllers.postProduct);

// Get all Products
router.get('/api/products', productControllers.getAllProducts);

// Get Product by ID
router.get('/api/products/:id', productControllers.getProductById);

// Update Product by ID
router.put('/api/products/:id', productControllers.updateProduct);

// Delete Product by ID
router.delete('/api/products/:id', productControllers.deleteProduct);
