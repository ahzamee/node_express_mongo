const jwt = require("jsonwebtoken");

const generateAccessToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = generateAccessToken(user._id, user.role);
  const timeLimit = 31536000000; // one year

  const cookieOptions = {
    expires: new Date(Date.now() + timeLimit),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("token", token, cookieOptions);

  user.password = undefined; // hide the user password

  res.status(statusCode).json({
    status: "success",
    user,
    statusCode: 200,
  });
};

module.exports = {
  createSendToken,
};
