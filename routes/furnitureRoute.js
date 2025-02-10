import express from "express"
import { addFurniture,getAllFurniture,getFurniture} from "../controller/furnitureController.js"

const router = express.Router()

router.post("/", addFurniture)
router.get("/", getAllFurniture)
router.get("/:slug",getFurniture)


export default router