const jwt = require("jsonwebtoken");
const response = require('../models/outputModels/responseBase');

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  if (!token) {
    response.ResponseBase(req, res, 403, "A token is required for authentication", token);;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.jwtDecoded  = decoded;
  } catch (err) {
    response.ResponseBase(req, res, 401, "Invalid Token", token);;
  }
  return next();
};

module.exports = verifyToken;