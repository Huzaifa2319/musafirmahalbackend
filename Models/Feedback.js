const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);
module.exports = Feedback;
