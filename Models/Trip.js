const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TripSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    depLocation: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    depTime: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isExpire: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: String,
      required: true,
    },
    minticketsfordiscount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
