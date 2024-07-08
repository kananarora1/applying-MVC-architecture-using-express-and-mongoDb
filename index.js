const mongoose = require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(() => {   
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log('Error:', err.message);
});


const express = require('express');

const app = express();

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});

app.use(express.json());



app.post('/api/products', async (req, res) => {
    const body = req.body;

    const product = ProductModel.create({
        product_name: body.product_name,
        product_price: body.product_price,
        isInStock: body.isInStock,
        Category: body.Category
    });
    console.log(product);

    return res.status(201).json({message: 'Product created successfully'});
});

// Get all Products
app.get('/api/products', async (req, res) => {
    const products = await ProductModel.find({isInStock: true});
    return res.json(products);
});

// Get Product by ID
app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    return res.json(product);
});

// Update Product by ID
app.put('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body); 
    return res.json(updatedProduct);
});

// Delete Product by ID
app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    return res.json(await ProductModel.find({}));
});

