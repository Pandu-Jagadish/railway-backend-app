const mongoose = require("mongoose");

const TrainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  averageSpeed: {
    type: Number,
    required: true,
  },
  departureStation: {
    type: String,
    required: true,
  },
  expectedArrivalTime: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Train", TrainSchema);
