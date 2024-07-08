const router = require("express").Router();
const productController = require("../Controllers/productController");


router.post("/", productController.postProduct);

// get route

router.get("/", productController.getAllProducts);

// Get product by id

router.get("/:id", productController.getProductById);

// Update product

router.put("/:id", productController.updateProduct);

/// Delete a Resource

router.delete("/:id", productController.deleteProduct);


module.exports = router