import express from "express";
import carsController from "../controllers/carsController.js";
import carsService from "../services/carsService.js";

const router = express.Router();

router.get("/", carsController.getAllCars)

router.post("/", carsController.createCar)

router.get("/:id", carsController.getCarById)

router.get("/plate/:plate", carsController.getCarByPlate)

router.get("/brand/:brand", carsController.getCarByBrand)

router.get("/available/count", carsController.countAvailableCars)

router.get("/available/cars", carsController.getAvailableCars)

router.get("/price/:min/:max", carsController.getCarsByPriceRange)

router.put("/:id", carsController.updateCar)

router.patch("/:id/availability".carsController.patchCar)

router.delete("/:id", carsController.deleteCar)


export default router;