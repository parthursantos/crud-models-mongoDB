import Car from "../models/Car.js";

const getAllCars = async () => {
  return Car.find();
};

const createCar = async (data) => {
  const { modelo, marca, ano, preco, placa } = data;

  if (!modelo || !marca || !placa) {
    const error = new Error("Modelo, marca e placa são obrigatorios");
    error.statusCode = 400;
    throw error;
  }

  const carExist = await Car.findOneAndDelete({ placa });

  if (carExist) {
    const error = new Error("placa já utilizada");
    error.statusCode = 400;
    throw error;
  }

  const car = await Car.create({
    modelo,
    marca,
    ano,
    preco,
    placa,
  });

  return {
    _id: car._id,
    modelo: car.modelo,
    marca: car.marca,
    ano: car.ano,
    preco: car.preco,
    placa: car.placa,
    createAt: car.createdAt,
    updateAt: car.updatedAt,
  };
};

const getCarById = async (id) => {
  const car = await Car.findById(id);

  if (!car) {
    const error = new Error("Carro não encontrado, verifique o Id novamente");
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const getCarByPlate = async (placa) => {
  const car = await Car.findOne({ placa });

  if (!car) {
    const error = new Error(
      "Carro não encontrado, verifique a placa novamente",
    );
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const getCarByBrand = async (marca) => {
  const car = await Car.findOne({ marca });

  if (!car) {
    const error = new Error("Carro não encontrado, Tente novamente");
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const countAvailableCars = async () => {
  return Car.countDocuments();
};

const getAvailableCars = async () => {
  const car = await Car.find({ disponivel: true });

  if (!car) {
    const error = new Error("Carro não encontrado ou não disponivel");
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const getCarsByPriceRange = async (min, max) => {
  const car = await Car.find({
    preco: { $lt: Number(max), $gt: Number(min) },
  });
  if (!car) {
    const error = new Error("Carro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const updateCar = async (id) => {
  const { modelo, marca, preco, placa } = data;
  const car = await Car.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  if (!car) {
    const error = new Error("Carro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return car;
};

const patchCar = async (id, data) => {
  const { disponivel } = data;

  const car = await Car.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return car;
};

const deleteCar = async (id, data) => {
  const { modelo, marcca, preco, placa } = data;

  const car = await Car.findByIdAndDelete(id, data, {
    new: true,
    runValidators: true,
  });

  if (!car) {
    const error = new Error("Carro não encontrado");
    error.statusCode = 404;
    throw error;
  }

  return car;
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
