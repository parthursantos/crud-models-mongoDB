import mongoose from "mongoose";

const UserSchema = new mongoose.Schema (
    {
        nome: {
        type: String,
        require: true,
        trim: true
        },
        email : {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        telefone: {
            type: String,
            trim: true,
            unique: true
        },
        idade: {
            type: Number,
            require: true
        },
        ativo: {
        type: Boolean,
        default: true
        }
    },
    {
        collection: "users",
        timestamps: true
    }
)
export default mongoose.model("User", UserSchema)