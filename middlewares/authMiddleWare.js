import User from "../model/User.js";

export const customAuthMiddle = async(req, res, next) => {
    const user = await User.findById(req.session.userID)
    if (!user) {
        return res.redirect("/login");
    }
    next();
}