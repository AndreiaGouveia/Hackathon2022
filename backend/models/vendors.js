const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: {type: String},
  district: {type: String},
  local: {type: String},
  dateOfRegistry: {type: Date, default: Date.now},
  typeOfEntity: {type: String},
  rating: {type: Number, default: 0},
  categories: {type: Array},
  description: {type: String}
});

module.exports = mongoose.model("VendorModel", VendorSchema, "Vendors");