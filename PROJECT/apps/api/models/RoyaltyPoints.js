const mongoose = require("mongoose");

const royaltyPointsSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
      unique: true,
    },
    total_rentals: {
      type: Number,
      default: 0,
      min: 0,
    },
    reward_redeemed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RoyaltyPoints", royaltyPointsSchema);
