const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET /api/products - ดึงสินค้าทั้งหมด + search + filter
router.get("/", async (req, res) => {
  try {
    const { search, category, min_price, max_price } = req.query;
    const filter = {};

    if (search) {
      filter.$or = [
        { brand: { $regex: search, $options: "i" } },
        { product_details: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      filter.category = category;
    }

    if (min_price || max_price) {
      filter.daily_rate = {};
      if (min_price) filter.daily_rate.$gte = NumberDecimal(min_price);
      if (max_price) filter.daily_rate.$lte = NumberDecimal(max_price);
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/products/:id - ดึงสินค้าชิ้นเดียว
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
