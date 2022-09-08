const Product = require("../model/productModel");
const ProductFeature = require("../middleware/ProductFeatures");

const ProductCtrl = {
  getAllProducts: async (req, res) => {
    try {
      let data = await Product.find();
      // let features = new ProductFeature(Product.find(), req.query).filtering().sorting().pagination()
      // const data = await features.query
      res.json({
        products: data,
        length: data.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      let product = await Product.findById({ _id: req.params.id });
      res.status(200).json({ product });
      // res.json({ msg: "get single products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createProduct: async (req, res) => {
    try {
      let product = await Product.create(req.body);
      res.status(200).json({ msg: "product created successfully" });
      // res.json({msg: "create products"})
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateProduct: async (req, res) => {
    try {
      let product = await Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      if (!product)
        return res.status(400).json({ msg: "product doesn't exixts." });
      res.status(200).json({ msg: "product updated successfully" });
      // res.json({ msg: "update products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await Product.findOneAndDelete({ _id: req.params.id });
      res.status(200).json({ msg: "product deleted successfully" });
      // res.json({ msg: "delete products" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ProductCtrl;
