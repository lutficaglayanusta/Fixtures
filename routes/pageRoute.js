import express from "express";
import {
  getIndexPage,
  getAboutPage,
  getContactPage,
  getLoginPage,
  getRegisterPage,
} from "../controller/pageController.js";
import { customLoginMiddle } from "../middlewares/redirectMiddleware.js"

const router = express.Router();

router.get("/", getIndexPage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);
router.get("/login",customLoginMiddle, getLoginPage);
router.get("/register",customLoginMiddle, getRegisterPage);

export default router;
