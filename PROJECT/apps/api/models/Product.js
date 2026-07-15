const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["bag", "clothes", "shoes", "accessories"],
    },
    daily_rate: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    product_details: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
      enum: ["XS", "S", "M", "L", "XL"],
    },
    current_status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
