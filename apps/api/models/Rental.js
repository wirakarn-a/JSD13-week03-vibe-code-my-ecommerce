const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema(
  {
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    rental_start_date: {
      type: Date,
      required: true,
    },
    rental_end_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["reserved", "ongoing", "completed", "overdue", "cancelled"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rental", rentalSchema);
