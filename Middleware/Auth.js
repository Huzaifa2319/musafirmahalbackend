const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const key = process.env.SecretKey;
  if (!token) {
    res.status(400).json({
      success: false,
      message: "Error! Token was not provided.",
    });
  }
  try {
    const decodedToken = jwt.verify(token, key);
    req.token = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = auth;
