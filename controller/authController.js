import User from "../model/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).redirect("/login");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const same = bcrypt.compare(password, user.password).then((same) => {
        if (same) {
          req.session.userID = user._id;
          return res.status(200).redirect("/users/dashboard");
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
export const logUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
export const getDashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.session.userID });
  res.render("dashboard", {
    page_name: "dashboard",
    user,
  });
};
