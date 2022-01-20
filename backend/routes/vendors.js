const express = require('express');
const ProductModel = require('../models/products');
const router = express.Router();
const VendorModel = require('../models/vendors');
var ObjectId = require('mongodb').ObjectId;

router.get('/', async (req, res) => {
    try {
        const vendors = await VendorModel.find();
        res.json({ status: 'success', content: vendors });
    }
    catch (error) {
        res.send(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const vendor = await VendorModel.findById(req.params.id);
        res.json({ status: 'success', content: vendor });
    }
    catch (error) {
        console.log(error)
        res.send(error);
    }
})

router.get('/:id/products', async (req, res) => {
    try {
        const products = await ProductModel.find({"vendor": req.params.id});
        res.json({ status: 'success', content: products });
    }
    catch (error) {
        res.send(error);
    }
})

module.exports = router;