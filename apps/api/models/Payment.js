const mongoose = require("mongoose");

const paymentTypeItemSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    payment_type: {
      type: String,
      required: true,
      enum: ["deposit", "delivery_fee", "rental_fee"],
    },
  },
  { _id: false }
);

const paymentSchema = new mongoose.Schema(
  {
    rental_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rental",
      required: true,
    },
    total_amount: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    payment_type: {
      type: [paymentTypeItemSchema],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "Payment must have at least one payment type item",
      },
    },
    payment_status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "refunded"],
    },
    payment_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
