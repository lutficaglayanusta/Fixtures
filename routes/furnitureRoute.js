import express from "express"
import { addFurniture, getFurniture } from "../controller/furnitureController.js"
import { getAllCategory } from "../controller/categoryController.js"

const router = express.Router()

router.post("/", addFurniture)
router.get("/", getAllCategory);
router.get("/:slug",getFurniture)


export default router