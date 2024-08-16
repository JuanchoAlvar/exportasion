const Product = require('../models/Product');

// GET all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create a new product
exports.createProduct = async (req, res) => {
  const { nameProduct, price, Weight } = req.body;

  const newProduct = new Product({ nameProduct, price, Weight });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update a product
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { nameProduct, price, Weight } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { nameProduct, price, Weight },
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE remove a product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};