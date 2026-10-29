import express from "express";
import saleController from "../controllers/saleController.js";
import saleService from "../services/saleService.js";

const router = express.Router();

router.post("/", saleController.createSale)

export default router;