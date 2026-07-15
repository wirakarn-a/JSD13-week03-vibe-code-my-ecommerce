const mongoose = require("mongoose");

const conditionSchema = new mongoose.Schema(
  {
    rental_items_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentalItem",
      required: true,
    },
    check_type: {
      type: String,
      required: true,
      enum: ["before_rental", "after_return"],
    },
    condition_notes: {
      type: String,
      required: true,
    },
    photo_evidence: {
      type: [String],
      default: [],
    },
    checked_by: {
      type: String,
      required: true,
      enum: ["staff", "manager"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Condition", conditionSchema);
