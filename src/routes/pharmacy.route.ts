import express from "express";
import pharmacyController from "../controllers/pharmacy.controller";

const router = express.Router();

router.get("/", pharmacyController.getPharmacies);

export default router;
