import User from "../model/User.js";


export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).redirect("/login")
    } catch (err) {
        
    }
}