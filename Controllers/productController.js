const ProductModel = require('../Models/productModel');

exports.postProduct = async (req, res) => {
    const body = req.body;

    const product = ProductModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        isInStock: body.isInStock,
        Category: body.Category
    });
    console.log(product);

    return res.status(201).json({message: 'Product created successfully'});
}

exports.getAllProducts = async (req, res) => {
    const products = await ProductModel.find({isInStock: true});
    return res.json(products);
}

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    return res.json(product);
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body); 
    return res.json(updatedProduct);
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    return res.json(await ProductModel.find({}));
}