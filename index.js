const express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const Email = require("./Middleware/Email");
const nodemailer = require("nodemailer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

const MONGODB_URL = process.env.URL;
const port = process.env.PORT;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const User = require("./Routes/User");
app.use(User);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//--------------------------------------------------------------------------------------------------
cloudinary.config({
  cloud_name: "dudilwuln",
  api_key: "494485269618477",
  api_secret: "IGYjMWjRrbFo2FbvTBBYLLura5E",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Places", // Optional: set folder name
    format: async (req, file) => "png", // Set desired format
    // public_id: (req, file) => "tripPlace", // Optional: set a unique name for the uploaded file
  },
});

const parser = multer({ storage: storage });

// Your route to handle file uploads
app.post("/upload", parser.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path }); // Respond with the uploaded image URL
});

//--------------------------------------------------------------------------------------------------
app.post("/sendemail", async (req, res) => {
  let trip = req.body.trip;
  let book = req.body.book;

  const toSend = Email({ trip, book });
  const to_ = book.email;
  console.log(to_);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
    port: 465, // Port for SMTP (usually 465)
    secure: true, // Usually true if connecting to port 465
    auth: {
      user: "ranahuz786@gmail.com", // Your email address
      pass: "afbg hknw sphp fzyk", // Password (for gmail, your app password)
    },
  });

  let info = await transporter
    .sendMail({
      from: '"You" <ranahuz786@gmail.com>',
      to: to_,
      subject: "Musafir Mahal Booking Confirmed!",
      html: toSend,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  // console.log(info.messageId);
  res.send("Email Sent");
});

//--------------------------------------------------------------------------------------------------

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
