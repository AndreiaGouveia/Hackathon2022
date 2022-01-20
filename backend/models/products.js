const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {type: String},
  unit: {type: String},
  pricePerUnit: {type: Number},
  description: {type: String},
  productCategories: {type: Array},
  vendor: {type: String}
});

module.exports = mongoose.model("ProductModel", ProductSchema, "Products");