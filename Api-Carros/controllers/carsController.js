import Car from "../models/Car.js";
import carsService from "../services/carsService.js";

const getAllCars = async (req, res, next) => {
  try {
    const car = await carsService.getAllCars();
    res.status(200).json({
      message: "Carros encontrados com sucesso",
      total: car.length,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const createCar = async (req, res, next) => {
  try {
    const car = await carsService.createCar(req.body);

    res.status(201).json({
      message: "Carro cadastrado com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const getCarById = async (req, res, next) => {
  try {
    const car = await carsService.getCarById(req.params.id);

    res.status(200).json({
      message: "Carro encontrado com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const getCarByPlate = async (req, res, next) => {
  try {
    const car = await carsService.getCarByPlate(req.params.plate);

    res.status(200).json({
      message: "Carro encontrado com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const getCarByBrand = async (req, res, next) => {
  try {
    const car = await carsService.getCarByBrand(req.params.brand);

    res.status(200).json({
      message: "Carro encontrado com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const countAvailableCars = async (req, res, next) => {
  try {
    const total = await carsService.countAvailableCars();

    res.status(200).json({
      message: "total de carros disponiveis",
      total,
    });
  } catch (error) {
    next(error);
  }
};

const getAvailableCars = async (req, res, next) => {
  try {
    const car = await carsService.getAvailableCars();

    res.status(200).json({
      message: "Carros encontrados com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const getCarsByPriceRange = async (req, res, next) => {
  try {
    const car = await carsService.getCarsByPriceRange(
      req.params.min,
      req.params.max,
    );

    res.status(200).json({
      message: "Carros encontrados com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const car = await carsService.updateCar(req.params.id, req.body);

    res.status(200).json({
      message: "carro atualizado com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const patchCar = async (req, res, next) => {
  try {
    const car = await carsService.patchCar(req.params.id, req.body);

    res.status(200).json({
      message: "disponibilidade do carro alterada com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const car = await carsService.deleteCar(req.params.id, req.body);

    res.status(200).json({
      message: "Carros encontrados com sucesso",
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCars,
  createCar,
  getCarById,
  getCarByPlate,
  getCarByBrand,
  countAvailableCars,
  getAvailableCars,
  getCarsByPriceRange,
  updateCar,
  patchCar,
  deleteCar
};
