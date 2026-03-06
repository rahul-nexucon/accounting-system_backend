import express from "express";

import clientRoutes from "./client.routes.js";
import vendorRoutes from "./vendor.routes.js";
import hsnRoutes from "./hsn.routes.js";

const router = express.Router();

router.use("/clients",clientRoutes);
router.use("/vendors",vendorRoutes);
router.use("/hsn",hsnRoutes);

export default router;