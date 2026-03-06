import express from "express";
import {
createHSN,
getHSN,
getHSNById,
updateHSN,
deleteHSN
} from "../controllers/hsn.controller.js";

const router = express.Router();

router.post("/",createHSN);
router.get("/",getHSN);
router.get("/:id",getHSNById);
router.put("/:id",updateHSN);
router.delete("/:id",deleteHSN);

export default router;