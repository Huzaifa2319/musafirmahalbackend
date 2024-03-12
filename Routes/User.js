const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../Models/UserSchema");
const auth = require("../Middleware/Auth");
const Trip = require("../Models/Trip");
const Feedback = require("../Models/Feedback");
const Admin = require("../Models/Admin");
const Booking = require("../Models/Bookings");
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
        {
          full_name: existingUser.full_name,
          email: existingUser.email,
          id: existingUser._id,
        },
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
        id: existingUser._id,
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

router.post("/addTrip", auth, (req, res) => {
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

router.get("/searchTrip/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trip.findOne({ _id: id });
    console.log(trip);
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/deleteTrip/:id", auth, async (req, res) => {
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

router.delete("/clearFeedback", auth, async (req, res) => {
  let result = await Feedback.deleteMany()
    .then((response) => {
      console.log(response);
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).send("Error");
    });
});

router.put("/updateTrips/:id", auth, async (req, res) => {
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

router.post("/giveFeedback", auth, async (req, res) => {
  const data = req.body;
  try {
    const feedback = new Feedback(data);
    await feedback.save();
    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

router.get("/viewFeedback", auth, async (req, res) => {
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

router.post("/adminlogin", async (req, res, next) => {
  let { adminname, password } = req.body;
  let existingUser = await Admin.findOne({
    adminname: adminname,
    password: password,
  });
  if (!existingUser) {
    const error = Error("Wrong name or password");
    res.status(401).json({
      success: false,
      error: error.message,
    });
  } else {
    let token;
    try {
      token = jwt.sign(
        { adminname: existingUser.adminname },
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
        adminname: existingUser.adminname,
        token: token,
      },
    });
  }
});

router.get("/getUser/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findOne({ _id: id }, { password: 0 });
    console.log(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/changePassword", auth, async (req, res) => {
  const { id, newpassword } = req.body;
  try {
    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: { password: newpassword } }
    );
    res.json({ message: "User password updated successfully", updatedUser });
  } catch (error) {
    res.status(500).json({ message: "error.message" });
  }
});

router.post("/bookTrip", auth, (req, res) => {
  const data = req.body;
  try {
    const book = new Booking(data);
    book.save();
    res.status(201).json({ success: true, data: book });
  } catch (error) {
    res.status(400).json({ success: false, msg: error });
  }
});

// router.post("/adup", (req, res) => {
//   const data = req.body;
//   try {
//     const ad = new Admin(data);
//     ad.save();
//     res.status(201).json({ success: true, data: ad });
//   } catch (error) {
//     res.status(400).json({ success: false, msg: error });
//   }
// });

router.get("/mybookings/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const book = await Booking.find({ userId: id });
    console.log(book);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//-----------------------------------------------------------

router.put("/confirmBooking", async (req, res) => {
  const { id } = req.body;

  try {
    const book = await Booking.updateOne(
      { _id: id },
      { $set: { status: "confirmed" } }
    );

    res.status(200).json({ message: "Booking Confirmed Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
router.put("/cancelBooking", async (req, res) => {
  const { id } = req.body;

  try {
    const book = await Booking.updateOne(
      { _id: id },
      { $set: { status: "cancelled" } }
    );

    res.status(200).json({ message: "Booking has been cancelled" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put("/confirmAll", async (req, res) => {
  const { id } = req.body;

  try {
    const book = await Booking.updateMany(
      { tripId: id },
      { $set: { status: "confirmed" } }
    );

    res.status(200).json({ message: "Booking Confirmed Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get("/tripBooked/:id", auth, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const book = await Booking.find({ tripId: id });
    console.log(book);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
