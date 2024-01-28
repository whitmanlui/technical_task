import express from "express";
import pharmacyRoute from "./pharmacy.route";
import orderRoute from "./order.route";

const router = express.Router();

router.use("/pharmacy", pharmacyRoute);
router.use("/order", orderRoute);

export default router;
