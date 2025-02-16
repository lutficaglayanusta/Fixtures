import express from "express";
import {
  getIndexPage,
  getAboutPage,
  getContactPage,
  getLoginPage,
  getRegisterPage,
} from "../controller/pageController.js";

const router = express.Router();

router.get("/", getIndexPage);
router.get("/about", getAboutPage);
router.get("/contact", getContactPage);
router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);

export default router;
