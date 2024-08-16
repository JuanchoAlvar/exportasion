const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nameProduct: { type: String, required: true },
  price: { type: Number, required: true },
  Weight: { type: Number, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);