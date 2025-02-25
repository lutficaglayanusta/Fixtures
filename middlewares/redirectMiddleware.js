import User from "../model/User.js";

export const customLoginMiddle = async (req, res, next) => {
    if (req.session.userID) {
      return res.redirect("/")
  }
  next();
};
