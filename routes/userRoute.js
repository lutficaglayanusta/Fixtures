import express from "express"
import { createUser,loginUser,logUser,getDashboardPage } from "../controller/authController.js"
import { customAuthMiddle } from "../middlewares/authMiddleWare.js"


const router = express.Router()

router.post("/signup", createUser)
router.post("/signin", loginUser);
router.get("/logout", logUser)
router.get("/dashboard",customAuthMiddle,getDashboardPage)


export default router