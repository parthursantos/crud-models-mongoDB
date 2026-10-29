import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

import carsRoutes from "./routes/carsRoutes.js";

import saleRouter from "./routes/saleRouter.js";

dotenv.config();

const app = express();
const PORT = 8900;

app.use(express.json());

app.use("/cars", carsRoutes);

app.use("/users", userRoutes);

app.use("/sales", saleRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log("Servidor rodando na porta: ", PORT);
    });
  } catch (error) {
    console.log("Erro ao iniciar o servidor", error.message);
  }
};

startServer();
