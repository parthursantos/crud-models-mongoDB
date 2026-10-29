import mongoose from "mongoose"

const connectDB = async () => {
    if(!process.env.MONGO_URI) {
        throw new Error("MONGO_URI não foi encontrado no .env")
    }
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Conectado com o mongoDB")
}

export default connectDB