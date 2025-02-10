import express from "express";
import { getIndexPage,getAboutPage,getContactPage } from "../controller/pageController.js";

const router = express.Router();

router.get("/", getIndexPage);
router.get("/about",getAboutPage);
router.get("/contact",getContactPage)



export default router;
