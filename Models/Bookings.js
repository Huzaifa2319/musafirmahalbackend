const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cnic: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    tripId: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    grandTotal: {
      type: String,
      required: true,
    },
    no_tickets: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;
