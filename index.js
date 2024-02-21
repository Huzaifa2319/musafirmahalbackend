const express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
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

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
