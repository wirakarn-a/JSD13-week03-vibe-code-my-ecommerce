const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    maintenance_type: {
      type: String,
      required: true,
      enum: [
        "cleaning",
        "repair",
        "leather_conditioning",
        "polishing",
        "stitching_repair",
        "zipper_repair",
        "sole_repair",
        "crystal_replacement",
        "hardware_check",
        "authentication_recheck",
        "prong_check",
        "insole_replacement",
      ],
    },
    cost: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    completion_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);
