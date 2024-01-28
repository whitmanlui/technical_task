import express from "express";
import orderController from "../controllers/order.controller";
import validate from "../middlewares/validator";
import orderValidation from "../validations/order.validation";

const router = express.Router();

router.get("/", orderController.getAllOrder);
router.get("/:pharmacyId", orderController.getOrder);
router.get("/:pharmacyId/:orderId", orderController.getOrderById);
router.post("/", validate(orderValidation.order), orderController.createOrder);

export default router;
