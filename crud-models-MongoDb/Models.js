import mongoose from "mongoose";

const modelsSchema = new mongoose.Schema(
  {
    titulo: String,
    descricao: String,
    solicitante: String,
    categoria: String,
    prioridade: String,
    status: String,
    dataAbertuda: {
        type: Date,
        default: Date.now
    }
  },
  { collection: "tickets" },
);

export default mongoose.model("Tickets", modelsSchema);
