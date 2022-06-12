const bcrypt = require("bcryptjs");
const User = require("../../models/user.model");
const { createSendToken } = require("../../util/token");

const login = async (req, res) => {
  const { mobile, password } = req.body;
  if (!mobile || !password) {
    return res.status(401).send({
      status: "error",
      message: "no id found",
    });
  }

  const user = await User.findOne({ mobile }).select("name password");

  if (!user){
    return res.send({
        message: "No user found.",
        errorCode: "101",
      });
  }

  const matchPassowrd = await bcrypt.compare(password, user.password);

  if (!matchPassowrd){
    return res.send({
        message: "Password does not match.",
        errorCode: "102",
      });
  }

  //if user is valid response with token
  createSendToken(user, 200, res);
  
};

const logout = (req, res) => {
  return res.status(202).clearCookie("token").send({
    status: "Success",
    message: "Token deleted",
  });
};

module.exports = {
  login,
  logout,
};
