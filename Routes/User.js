const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
const auth = require("../Middleware/Auth");
const Trip = require("../Models/Trip");
const Feedback = require("../Models/Feedback");
require("dotenv").config();

router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;
  let existingUser = await User.findOne({
    email: email,
    password: password,
  });
  if (!existingUser) {
    const error = Error("Wrong Email or password");
    res.status(401).json({
      success: false,
      error: error.message,
    });
  } else {
    let token;
    try {
      token = jwt.sign(
        { full_name: existingUser.full_name, email: existingUser.email },
        process.env.SecretKey,
        { expiresIn: "1h" }
      );
    } catch (err) {
      console.log(err);
      const error = new Error("Error! Something went wrong.");
      next(error);
    }
    res.status(200).json({
      success: true,
      data: {
        full_name: existingUser.full_name,
        email: existingUser.email,
        token: token,
      },
    });
  }
});

router.post("/signup", (req, res) => {
  console.log("Hello");
  const data = req.body;
  const id = Math.floor(Math.random() * 5000);
  try {
    const user = new User(data);
    user.userid = id;
    user.save();
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

router.post("/addTrip", (req, res) => {
  const data = req.body;
  try {
    const trip = new Trip(data);
    trip.save();
    res.status(201).json({ success: true, data: trip });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

router.get("/getTrips", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/searchTrip/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trip.findOne({ _id: id });
    console.log(trip);
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/deleteTrip/:id", async (req, res) => {
  const { id } = req.params;

  let result = await Trip.deleteOne({ _id: id })
    .then((response) => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).send("Error");
    });
});

router.put("/updateTrips/:id", async (req, res) => {
  const { id } = req.params;
  const { isExpire } = req.body; // The new name to be updated
  console.log(req.body);

  try {
    const updatedTrip = await Trip.updateOne(
      { _id: id },
      { $set: { isExpire: !isExpire } }
    );

    if (updatedTrip.nModified === 0) {
      return res
        .status(404)
        .json({ message: "Trip not found or no modifications made" });
    }

    res.json({ message: "Trip status updated successfully", updatedTrip });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/giveFeedback", (req, res) => {
  const data = req.body;
  try {
    const feedback = new Feedback(data);
    feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

router.get("/viewFeedback", async (req, res) => {
  try {
    const feed = await Feedback.find();
    res.json(feed);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/Welcome", auth, (req, res) => {
  console.log("Welcome");
  res.send("Welcome");
});

module.exports = router;
