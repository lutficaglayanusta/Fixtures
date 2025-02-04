import express from "express";
import { getIndexPage,getAboutPage,getContactPage,getFurnituresPage } from "../controller/pageController.js";

const router = express.Router();

router.get("/", getIndexPage);
router.get("/about",getAboutPage);
router.get("/contact",getContactPage)
router.get("/furnitures", getFurnituresPage);


export default router;
