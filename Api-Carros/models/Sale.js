import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    require: true,
  },
  CarId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    require: true,
  },
  ValorVenda: {
    type: Number,
    require: true,
  },
  formaPagamento: {
    type: String,
    require: true,
    enum: ["pix", "cartão", "boleto", "dinheirp", "financiamento"],
  },
  dataVenda: {
    type: STATES,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pendente", "paga","cancelada"],
    default: "paga"
  },
},
{
    collection: "sales",
    timestamps: true
})

export default mongoose.model("Sale", SaleSchema)

