// routes/train.js

const express = require("express");
const router = express.Router();
const Train = require("../models/Train");

// POST - Create a new train
router.post("/", async (req, res) => {
  const { name, type, averageSpeed, departureStation, expectedArrivalTime } =
    req.body;

  try {
    const newTrain = new Train({
      name,
      type,
      averageSpeed,
      departureStation,
      expectedArrivalTime,
    });

    const train = await newTrain.save();

    res.json(train);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// GET - Get all trains
router.get("/", async (req, res) => {
  try {
    const trains = await Train.find();
    res.json(trains);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// PUT - Update a train
router.put("/:id", async (req, res) => {
  const { name, type, averageSpeed, departureStation, expectedArrivalTime } =
    req.body;

  try {
    let train = await Train.findById(req.params.id);

    if (!train) {
      return res.status(404).json({ error: "Train not found" });
    }

    train.name = name;
    train.type = type;
    train.averageSpeed = averageSpeed;
    train.departureStation = departureStation;
    train.expectedArrivalTime = expectedArrivalTime;

    await train.save();

    res.json(train);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// DELETE - Delete a train
router.delete("/:id", async (req, res) => {
  try {
    console.log(req, "delete");
    let train = await Train.findById(req.params.id);
    console.log(train);
    if (!train) {
      return res.status(404).json({ error: "Train not found" });
    }

    await train.deleteOne();

    res.json({ message: "Train deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
