import express from "express";
import dotenv from "dotenv";
import mongoose, { model, Model } from "mongoose";
import Models from "./Models.js";

dotenv.config();

const app = express();
const PORT = 7800;

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado com o MONGODB");
  } catch (error) {
    console.log("Erro ao conectar com o MongoDB", error);
  }
};

connectDB();

app.post("/tickets", async (req, res) => {
    try {

        const newModels = await Models.create(req.body)
        res.json(newModels)

    } catch ( error ) {
   
        res.json( { error : error.message } )
    }
})

app.get("/tickets", async (req,res) => {
    try {

        const models = await Models.find()
        res.json(models)

    } catch (error) {
        res.json({error: error.message})
    }
})
app.get("/tickets/:id", async (req,res) => {
    try {
        const models = await Models.findById(req.params.id)
        res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})

app.put("/tickets/:id/update", async (req, res) => {
    try {
        const models = await Models.findByIdAndUpdate(req.params.id)
        res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})
app.delete("/tickets/:id/delete", async (req, res) => {
    try {
        const models = await Models.findByIdAndDelete(req.params.id)
        res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})
app.get("/tickets/open/tickets", async (req,res) => {
    try {
    const models = await Models.find(
        {status: "Aberto"}
    )
    res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})
app.get("/tickets/priority/:prioridade", async (req, res) => {
    try {
        const models = await Models.find({ 
            prioridade: req.params.prioridade
        })
        res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }

})
app.get("/tickets/category/:categoria", async (req,res) => {
    try {
        const models = await Models.find({
            categoria: req.params.categoria
    })
    res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})
app.patch("/tickets/:id/status/", async (req,res) => {
    try {
        const models = await Models.findByIdAndUpdate(
            req.params.id
        )
        res.json(models)
    } catch (error) {
        res.json({error: error.message})
    }
})
app.listen(PORT, () =>
  console.log("O servidor está rodando na porta : ", PORT),
);